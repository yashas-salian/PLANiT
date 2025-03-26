import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'


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

eventRouter.use('/*',async (c,next)=>{
  const token = c.req.header("Authorization")
  if (!token){
    return c.json({
      message: "Authorization failed"
    })
  }

  const payload = await verify(token  , c.env.JWT_SECRET)
  if (!payload){
    return c.json({
      message: "Authorization failed in middleware"
    })
  }
  c.set("userid" , payload.id as string)
  await next()
})

eventRouter.post('/book-event',async (c)=>{
  const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
    const body = await c.req.json()
    // const {success} = body
    // if (!success){
    //   return c.json({
    //     message: "Booking failed while parsing"
    //   })
    // }
    // console.log(date)
    console.log(body.EventDate)
    const userid= c.get("userid")
    try{
      const isVenueBooked = await prisma.events.findFirst({
        where: {
          EventVenue:body.EventVenue,
          EventDate: body.EventDate
        }
      })

      if (isVenueBooked){
        return c.json({
          message: "venue aleady booked for this date"
        })
      }

      const event= await prisma.events.create({
        data:{
          clientName:body.clientName,
          PhoneNumber: body.PhoneNumber,
          EventName: body.EventName,
          Category : body.Category,
          EventDate : body.EventDate,
          EventVenue : body.EventVenue,
          Attendees : body.Attendees,
          Budget: body.Budget,
          userID : Number(userid)
        }
      })

      return c.json({
        message: "Booking successfull",
        ID : event.id
      }) 
    }
    catch(e){
      return c.json({
        message: "Booking failed",
        error: e
      })
    }
})

eventRouter.get('/event-details-upcoming',async (c)=>{
  const prisma = new PrismaClient({
	datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
  const userid= c.get("userid")
  try {
    const events = await prisma.events.findMany({
      where : {
        userID : Number(userid),
        EventStatus : false
      }, 
      select:{
        clientName: true,
        PhoneNumber: true,
        EventName: true,
        Category: true,
        EventDate: true,
        EventVenue: true,
        Attendees: true,
        Budget: true
      }
    })

    if (!events){
      return c.json({
        message: "No events found"
      })
    }

    const eventdetails = events.map(event => ({
      ...event,
      PhoneNumber: event.PhoneNumber?.toString(), 
      Budget: event.Budget?.toString(),
    }));
    
    return c.json({ 
      events: eventdetails 
    });
  }
  catch(e){
    return c.json({
      message: "Cannot get events ",
      error:  e instanceof Error ? e.message : "Unknown error"
    })
  } 
})

eventRouter.get('/event-details-completed',async (c)=>{
  const prisma = new PrismaClient({
	datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
  const userid= c.get("userid")
  try {
    const events = await prisma.events.findMany({
      where : {
        userID : Number(userid),
        EventStatus : true
      }, 
      select:{
        clientName: true,
        PhoneNumber: true,
        EventName: true,
        Category: true,
        EventDate: true,
        EventVenue: true,
        Attendees: true,
        Budget: true
      }
    })

    if (!events){
      return c.json({
        message: "No events found"
      })
    }

    const eventdetails = events.map(event => ({
      ...event,
      PhoneNumber: event.PhoneNumber?.toString(), 
      Budget: event.Budget?.toString(),
    }));
    
    return c.json({ 
      events: eventdetails 
    });
  }
  catch(e){
    return c.json({
      message: "Cannot get events ",
      error:  e instanceof Error ? e.message : "Unknown error"
    })
  } 
})

