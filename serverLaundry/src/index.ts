import { Hono } from "hono"
import { cors } from "hono/cors"
import * as dotenv from "dotenv"
import { router } from "./routes"
import { handle } from "hono/vercel"

dotenv.config()

const app = new Hono()

app.use("*", cors({
  origin: process.env.CORS_ORIGIN || "*",
  allowMethods: ["GET", "POST", "PUT", "DELETE"],
}))

app.route("/api", router)

export const GET = handle(app)
export const POST = handle(app)
export const PUT = handle(app)
export const DELETE = handle(app)
