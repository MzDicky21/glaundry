"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const db_collection_1 = require("../../config/db.collection");
const db_connect_1 = require("../../config/db.connect");
const laundries_validation_1 = require("./laundries.validation");
const error_1 = require("../../utils/error");
const aggregate_1 = __importDefault(require("../../utils/aggregate"));
const validation_1 = __importDefault(require("../../utils/validation"));
const response_1 = __importDefault(require("../../utils/response"));
const service_1 = __importDefault(require("../../utils/service"));
class LaundriesController {
    static async getAll(c) {
        try {
            const collection = await (0, db_connect_1.getConnectDb)(db_collection_1.COLLECTION.LAUNDRY);
            const data = await aggregate_1.default.aggregateToAll(collection, "customers", "customerId", "_id", "laundries", false);
            validation_1.default.data(data);
            return response_1.default.succes(c, "laundries geted successfully", data);
        }
        catch (error) {
            return (0, error_1.getErr)(c, error);
        }
    }
    static async getOne(c) {
        try {
            const { id } = c.req.param();
            validation_1.default.validId(id);
            const collection = await (0, db_connect_1.getConnectDb)(db_collection_1.COLLECTION.LAUNDRY);
            const data = await aggregate_1.default.aggregateToOne(id, collection, db_collection_1.COLLECTION.CUSTOMER, "customerId", "_id", false);
            validation_1.default.data(data);
            return response_1.default.succes(c, "a laundries geted by id success", data);
        }
        catch (error) {
            return (0, error_1.getErr)(c, error);
        }
    }
    static async create(c) {
        try {
            const body = await c.req.json();
            validation_1.default.body(laundries_validation_1.laundriesSchema, body);
            validation_1.default.trim(body);
            body.customerId = new mongodb_1.ObjectId(body.customerId);
            const data = await service_1.default.create(db_collection_1.COLLECTION.LAUNDRY, body);
            validation_1.default.data(data);
            return response_1.default.created(c, "laundries created successfully", data);
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
            validation_1.default.body(laundries_validation_1.laundriesSchemaOptional, body);
            validation_1.default.trim(body);
            if (body.customerId) {
                body.customerId = new mongodb_1.ObjectId(body.customerId);
            }
            const data = await service_1.default.update(db_collection_1.COLLECTION.LAUNDRY, id, body);
            validation_1.default.data(data);
            return response_1.default.succes(c, "laundry updated succesfully", data);
        }
        catch (error) {
            return (0, error_1.getErr)(c, error);
        }
    }
    static async deleted(c) {
        try {
            const { id } = c.req.param();
            validation_1.default.validId(id);
            validation_1.default.existOne(db_collection_1.COLLECTION.LAUNDRY, id);
            await service_1.default.delete(db_collection_1.COLLECTION.LAUNDRY, id);
            return response_1.default.deleted(c, "laundry deleted successfully");
        }
        catch (error) {
            return (0, error_1.getErr)(c, error);
        }
    }
}
exports.default = LaundriesController;
