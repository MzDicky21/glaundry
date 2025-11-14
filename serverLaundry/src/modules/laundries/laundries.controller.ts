import { Context } from "hono";
import { ObjectId } from "mongodb";
import { COLLECTION } from "../../config/db.collection";
import { getConnectDb } from "../../config/db.connect";
import { laundriesSchema, laundriesSchemaOptional } from "./laundries.validation";
import { LaundriesData, LaundriesInput } from "./laundries.types";
import { getErr } from "../../utils/error";
import AggregateUtils from "../../utils/aggregate";
import ValidationUtils from "../../utils/validation";
import ResponseUtils from "../../utils/response";
import ServiceUtils from "../../utils/service";

export default class LaundriesController {
    static async getAll(c: Context) {
        try {
            const collection = await getConnectDb(COLLECTION.LAUNDRY)
            const data = await AggregateUtils.aggregateToAll(collection, "customers", "customerId", "_id", "laundries", false)
            ValidationUtils.data(data)

            return ResponseUtils.succes(c, "laundries geted successfully", data)
        } catch (error) {
            return getErr(c, error)
        }
    }

    static async getOne(c: Context) {
        try {
            const { id } = c.req.param()
            ValidationUtils.validId(id)
            const collection = await getConnectDb(COLLECTION.LAUNDRY)
            const data = await AggregateUtils.aggregateToOne(id, collection, COLLECTION.CUSTOMER, "customerId", "_id", false)
            ValidationUtils.data(data)

            return ResponseUtils.succes(c, "a laundries geted by id success", data)
        } catch (error) {
            return getErr(c, error)
        }
    }

    static async create(c: Context) {
        try {
            const body = await c.req.json()
            ValidationUtils.body(laundriesSchema, body)
            ValidationUtils.trim(body)
            body.customerId = new ObjectId(body.customerId)
            const data = await ServiceUtils.create<LaundriesData>(COLLECTION.LAUNDRY, body)
            ValidationUtils.data(data)

            return ResponseUtils.created(c, "laundries created successfully", data)
        } catch (error) {
            return getErr(c, error)
        }
    }

    static async update(c: Context) {
        try {
            const { id } = c.req.param()
            ValidationUtils.validId(id)
            const body = await c.req.json()
            ValidationUtils.body(laundriesSchemaOptional, body)
            ValidationUtils.trim(body)
            if (body.customerId) {
                body.customerId = new ObjectId(body.customerId)
            }
            const data = await ServiceUtils.update<LaundriesInput>(COLLECTION.LAUNDRY, id, body)
            ValidationUtils.data(data)

            return ResponseUtils.succes(c, "laundry updated succesfully", data)
        } catch (error) {
            return getErr(c, error)
        }
    }

    static async deleted(c: Context) {
        try {
            const { id } = c.req.param()
            ValidationUtils.validId(id)
            ValidationUtils.existOne(COLLECTION.LAUNDRY, id)
            await ServiceUtils.delete(COLLECTION.LAUNDRY, id)

            return ResponseUtils.deleted(c, "laundry deleted successfully",)
        } catch (error) {
            return getErr(c, error)
        }
    }
}