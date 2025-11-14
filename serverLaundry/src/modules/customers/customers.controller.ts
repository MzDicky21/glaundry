import { Context } from "hono";
import { COLLECTION } from "../../config/db.collection";
import { getConnectDb } from "../../config/db.connect";
import { customersSchema, customersSchemaOptional } from "./customers.validation";
import { CustomersData, CustomersInput } from "./customers.types";
import { getErr } from "../../utils/error";
import ServiceUtils from "../../utils/service";
import ValidationUtils from "../../utils/validation";
import ResponseUtils from "../../utils/response";
import AggregateUtils from "../../utils/aggregate";

export default class CustomersController {
    static async getAll(c: Context) {
        try {
            const collection = await getConnectDb(COLLECTION.CUSTOMER)
            const data = await AggregateUtils.aggregateToAll(collection, "laundries", "_id", "customerId", "customers", true)
            ValidationUtils.data(data)

            return ResponseUtils.succes(c, "customers geted successfully", data)
        } catch (error) {
           return getErr(c, error)
        }
    }

    static async getOne(c: Context) {
        try {
            const { id } = c.req.param()
            ValidationUtils.validId(id)
            const collection = await getConnectDb(COLLECTION.CUSTOMER)
            const data = await AggregateUtils.aggregateToOne(id, collection, COLLECTION.LAUNDRY, "_id", "customerId", true)
            ValidationUtils.data(data)

            return ResponseUtils.succes(c, "a customers geted by id success", data)
        } catch (error) {
           return getErr(c, error)
        }
    }

    static async create(c: Context) {
        try {
            const body = await c.req.json()
            ValidationUtils.body(customersSchema, body)
            ValidationUtils.trim(body)
            const data = await ServiceUtils.create<CustomersData>(COLLECTION.CUSTOMER, body)
            ValidationUtils.data(data)

            return ResponseUtils.created(c, "customers created successfully", data)
        } catch (error) {
           return getErr(c, error)
        }
    }

    static async update(c: Context) {
        try {
            const { id } = c.req.param()
            ValidationUtils.validId(id)
            const body = await c.req.json()
            ValidationUtils.body(customersSchemaOptional, body)
            ValidationUtils.trim(body)
            const data = await ServiceUtils.update<CustomersInput>(COLLECTION.CUSTOMER, id, body)
            ValidationUtils.data(data)

            return ResponseUtils.succes(c, "customer updated succesfully", data)
        } catch (error) {
           return getErr(c, error)
        }
    }

    static async deleted(c: Context) {
        try {
            const { id } = c.req.param()
            ValidationUtils.validId(id)
            await ValidationUtils.existOne(COLLECTION.CUSTOMER, id)
            await ServiceUtils.delete(COLLECTION.CUSTOMER, id)

            return ResponseUtils.deleted(c, "customer deleted successfully",)
        } catch (error) {
           return getErr(c, error)
        }
    }
}