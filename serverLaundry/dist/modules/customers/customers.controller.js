"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_collection_1 = require("../../config/db.collection");
const db_connect_1 = require("../../config/db.connect");
const customers_validation_1 = require("./customers.validation");
const error_1 = require("../../utils/error");
const service_1 = __importDefault(require("../../utils/service"));
const validation_1 = __importDefault(require("../../utils/validation"));
const response_1 = __importDefault(require("../../utils/response"));
const aggregate_1 = __importDefault(require("../../utils/aggregate"));
class CustomersController {
    static async getAll(c) {
        try {
            const collection = await (0, db_connect_1.getConnectDb)(db_collection_1.COLLECTION.CUSTOMER);
            const data = await aggregate_1.default.aggregateToAll(collection, "laundries", "_id", "customerId", "customers", true);
            validation_1.default.data(data);
            return response_1.default.succes(c, "customers geted successfully", data);
        }
        catch (error) {
            return (0, error_1.getErr)(c, error);
        }
    }
    static async getOne(c) {
        try {
            const { id } = c.req.param();
            validation_1.default.validId(id);
            const collection = await (0, db_connect_1.getConnectDb)(db_collection_1.COLLECTION.CUSTOMER);
            const data = await aggregate_1.default.aggregateToOne(id, collection, db_collection_1.COLLECTION.LAUNDRY, "_id", "customerId", true);
            validation_1.default.data(data);
            return response_1.default.succes(c, "a customers geted by id success", data);
        }
        catch (error) {
            return (0, error_1.getErr)(c, error);
        }
    }
    static async create(c) {
        try {
            const body = await c.req.json();
            validation_1.default.body(customers_validation_1.customersSchema, body);
            validation_1.default.trim(body);
            const data = await service_1.default.create(db_collection_1.COLLECTION.CUSTOMER, body);
            validation_1.default.data(data);
            return response_1.default.created(c, "customers created successfully", data);
        }
        catch (error) {
            return (0, error_1.getErr)(c, error);
        }
    }
    static async update(c) {
        try {
            const { id } = c.req.param();
            validation_1.default.validId(id);
            const body = await c.req.json();
            validation_1.default.body(customers_validation_1.customersSchemaOptional, body);
            validation_1.default.trim(body);
            const data = await service_1.default.update(db_collection_1.COLLECTION.CUSTOMER, id, body);
            validation_1.default.data(data);
            return response_1.default.succes(c, "customer updated succesfully", data);
        }
        catch (error) {
            return (0, error_1.getErr)(c, error);
        }
    }
    static async deleted(c) {
        try {
            const { id } = c.req.param();
            validation_1.default.validId(id);
            await validation_1.default.existOne(db_collection_1.COLLECTION.CUSTOMER, id);
            await service_1.default.delete(db_collection_1.COLLECTION.CUSTOMER, id);
            return response_1.default.deleted(c, "customer deleted successfully");
        }
        catch (error) {
            return (0, error_1.getErr)(c, error);
        }
    }
}
exports.default = CustomersController;
