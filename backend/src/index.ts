import { Hono } from 'hono'
import {cors} from "hono/cors"
import { userRouter } from './routes/user'
import { eventRouter } from './routes/events'
import { venueRouter } from './routes/venue'
import { scheduled as eventUpdater } from "./workers/eventStatusUpdater";

const app = new Hono()

app.use('*',cors({
  origin: '*',
  allowHeaders: ['Authorization', 'ID','*'],
  allowMethods: ['POST', 'GET', 'OPTIONS', 'PUT'],
  credentials: true,
}))
app.route('/api/v1/app/user',userRouter)
app.route('/api/v1/app/event',eventRouter)
app.route('/api/v1/app/venue',venueRouter)

// export default app

// export { scheduled };


export default {
    fetch: app.fetch, 
    scheduled: eventUpdater, 
  };