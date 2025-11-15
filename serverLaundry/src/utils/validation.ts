import { ObjectId } from "mongodb"
import { throwErr } from "./error"
import ServiceUtils from "./service"

export default class ValidationUtils {
    static validId(id: string | undefined) {
        if (!id) return throwErr(400, "id is required")

        if (!ObjectId.isValid(id)) {
            return throwErr(400, "id is invalid")
        }
    }

    static body(schema: any, data: any) {
        const validation = schema.safeParse(data)
        const message = validation.error?.issues[0].message
        if (!validation.success) {
            return throwErr(400, message)
        }
    }

    static data(data: any) {
        if (!data || data.length === 0) return throwErr(400, "data is required")
    }

    static async trim(data: any) {
        const invalid = Object.entries(data)
            .filter(([_, value]) => typeof value === "string" && value.trim() === "")
            .map(([key]) => key)
        if (invalid.length > 0) {
            return throwErr(400, `${invalid[0]} not empty`)
        }

        return null
    }

    static async existOne(collection: string, id: string) {
        const data = await ServiceUtils.getOne(collection, id)
        if (!data) return throwErr(404, `data ${collection} doesn't exist`)
    }
}