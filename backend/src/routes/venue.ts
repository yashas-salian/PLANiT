import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'


export const venueRouter =new Hono<{
    Bindings :{
      DATABASE_URL: string
      JWT_SECRET: string
    }
    Variables:{
      userid: string
    }
  }
>()

venueRouter.get('/get-venues',async (c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL	,
    }).$extends(withAccelerate());
  try {
    const venues = await prisma.venues.findMany()
    
    return c.json({ 
      venues: venues 
    });
  }
  catch(e){
    return c.json({
      message: "Cannot get venues ",
      error:  e instanceof Error ? e.message : "Unknown error"
    })
  } 
})

