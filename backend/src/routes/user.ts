import { Hono } from 'hono'
import { Prisma, PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'
import { signininput, signupinput } from '@yashas40/modules'

export const userRouter =new Hono<{
    Bindings :{
      DATABASE_URL: string
      JWT_SECRET: string
    }
    Variables:{
      userid: string
    }
  }
>()


userRouter.post('/signup',async (c)=>{
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

    const body= await c.req.json()
    const {success} = signupinput.safeParse(body)   
    if (!success){
        return c.json({
            message : "signin failed during parsing"
        })
    }
     try{

        const existingUser= await prisma.user.findFirst({
            where:{
                email : body.email
            }
        })

        if (existingUser){
            return c.json({
                message: "User with this email already exists"
            })
        }

        const user = await prisma.user.create({
            data:{
                name : body.name,
                email : body.email,
                password : body.password
            }
        })
        console.log('JWT_SECRET:', c.env.JWT_SECRET);
        const jwt = await sign({id :user.id},c.env.JWT_SECRET)
        console.log(jwt)
        return c.json({
            message : "signup successfull",
            token : jwt
        })
     }
     catch(e){
        console.log(e)
        return c.json({
             message : "signin failed after reaching db",
             error : e
        })
     }  
})


userRouter.post('/login',async (c)=>{
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
    const body =await  c.req.json()
    const {success} = signininput.safeParse(body)
    if (!success){
        return c.json({
            message : "Login failed during parsing"
        })
    }

    try {
        const user= await prisma.user.findFirst({
            where:{
                email : body.email,
                password : body.password
            }
        })

        if (!user){
            return c.json({
                message : "login failed"
            })

        }
        const jwt =await sign({id:user.id}, c.env.JWT_SECRET)
        return c.json({
            message : "login successfull",
            token : jwt
        })
    }
    catch(e){
        console.log(e)
        return c.json({
             message : "login failed after reaching db",
             error : e
        })
     }  
})

userRouter.get('/get-details',async (c)=>{
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

    const token = c.req.header("Authorization")
    if (!token){
        return c.json({
            message : "Token not found"
        })
    }

    const payload = await verify(token , c.env.JWT_SECRET)
    if (!payload){
        return c.json({
            message : "Payload not generated"
        })
    }

    const userID = payload.idb as number

    const user = await prisma.user.findFirst({
        where:{
            id: userID
        },
        select:{
            name: true,
            email: true
        }
    })

    if (!user){
        return c.json({
            message : "user not found"
        })
    }

    return c.json({
        details : user
    })
})

