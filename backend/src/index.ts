import { Hono } from 'hono'
import {cors} from "hono/cors"
import { userRouter } from './routes/user'
import { eventRouter } from './routes/events'
const app = new Hono()

app.use(cors())
app.route('/api/v1/app/user',userRouter)
app.route('/api/v1/app/event',eventRouter)

export default app


