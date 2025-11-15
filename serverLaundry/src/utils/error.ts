import { Context } from "hono"
import { StatusCode } from "hono/utils/http-status"

export function getErr(
  c: Context,
  error: any = {},
  message: string = "An error occurred, please wait a moment!",
  code: StatusCode = 500
) {
  c.status(code)
  return c.json({
    message,
    error: error?.message || "internal server error",
  })
}

export function messageErr(
  c: Context,
  message: string = "An error occurred, please wait a moment!",
  code: StatusCode = 500,
  error?: any,
) { 
  const err = error ? error : "Internal server error"
  c.status(code)
  return c.json({
    message,
    error: err
  })
}

export function throwErr(status: number, message: string): never {
  throw { status, message };
}
