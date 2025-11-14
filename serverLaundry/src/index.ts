import { Hono } from 'hono'
import { cors } from 'hono/cors'
import * as dotenv from 'dotenv'
import { router } from './routes'
import { handle } from 'hono/vercel'

dotenv.config()

const app = new Hono()

app.use('*', cors({
  origin: 'http://localhost:3000', 
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
}))

app.route('/api', router)

export default handle(app)
