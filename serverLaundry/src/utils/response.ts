import { Context } from "hono";
import { StatusCode } from "hono/utils/http-status";

export default class ResponseUtils {
    static async succes(
        c: Context,
        message: string = "succes",
        data: any,
        code: StatusCode = 200,
    ) {
        c.status(code)
        return c.json({
            message,
            data
        })
    }

    static async created(
        c: Context,
        message: string = "craeted succes fully",
        data: any,
        code: StatusCode = 201,
    ) {
        c.status(code)
        return c.json({
            message,
            data
        })
    }

    static async deleted(
        c: Context,
        message: string = "deleted succes fully",
        code: StatusCode = 200,
        data?: any
    ) {
        c.status(code)
        return c.json({
            message,
            data
        })
    }
}