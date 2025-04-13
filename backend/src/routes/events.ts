import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'
import { useEffect } from 'hono/jsx'


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
      message: "Authorization failed",
      req : c.req
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

    const ID = events.map(event => event.id);
    
    return c.json({ 
      events: eventdetails ,
      id: ID
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


eventRouter.put('/update-events',async (c)=>{
  const prisma = new PrismaClient({
	datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
  const userid= c.get("userid")

  if (!userid) {
    return c.json({ message: "User ID is required" }, 400);
  }

  try {
    const body = await c.req.json()
    const ID = await Number(c.req.header("ID"))
console.log(ID)
    const userDetails = await prisma.events.findFirst({
      where: {
        id: ID
      },
      select:{
        id:true,
        clientName:true,
        PhoneNumber: true,
        EventName: true,
        Category : true,
        EventDate : true,
        EventVenue : true,
        Attendees : true,
        Budget: true,
      }
    })


    const updatedEvents = await prisma.events.update({
      where : {
        id : userDetails?.id
      },
      data:{
        clientName:body?.clientName?? userDetails?.clientName,
        PhoneNumber: body?.PhoneNumber ?? userDetails?.PhoneNumber,
        EventName: body?.EventName ?? userDetails?.EventName,
        Category : body?.Category ?? userDetails?.Category,
        EventDate : body?.EventDate ?? userDetails?.EventDate,
        EventVenue : body?.EventVenue ?? userDetails?.EventVenue,
        Attendees : body?.Attendees ?? userDetails?.Attendees,
        Budget: body?.Budget ?? userDetails?.Budget,
      }
    })

    return c.json({
      ID : updatedEvents.id,
      message  : "Successfull"
    })
  }
  catch(e){
    return c.json({
      message: "Cannot get event",
      error:  e instanceof Error ? e.message : "Unknown error"
    })
  } 
})

eventRouter.put('/delete-event',async (c)=>{
  const prisma = new PrismaClient({
	datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
  const userid= c.get("userid")
  console.log(userid)
  if (!userid) {
    return c.json({ message: "User ID is required" }, 400);
  }

  try {
    const body = await c.req.json()
    const ID = await Number(c.req.header("ID"))
    console.log(ID)
    const deleteEvent = await prisma.events.delete({
      where: {
        id: ID
      }
    })
    return c.json({
      ID : deleteEvent.id,
      message  : "Deletion Successfull"
    })
  }
  catch(e){
    return c.json({
      message: "Cannot get event",
      error:  e instanceof Error ? e.message : "Unknown error"
    })
  } 
})

export default eventRouter