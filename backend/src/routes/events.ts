import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'


export const eventRouter =new Hono<{
    Bindings :{
      DATABASE_URL: string
      JWT_SECRET: string
    }
    Variables:{
      userid: string
    }
  }
>()

eventRouter.post('/book-event', (c)=>{
    return c.text("hello yashas")
})

eventRouter.get('/event-details', (c)=>{
    return c.text("hello yashas")
})

