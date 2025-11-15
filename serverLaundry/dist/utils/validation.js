"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const error_1 = require("./error");
const service_1 = __importDefault(require("./service"));
class ValidationUtils {
    static validId(id) {
        if (!id)
            return (0, error_1.throwErr)(400, "id is required");
        if (!mongodb_1.ObjectId.isValid(id)) {
            return (0, error_1.throwErr)(400, "id is invalid");
        }
    }
    static body(schema, data) {
        const validation = schema.safeParse(data);
        const message = validation.error?.issues[0].message;
        if (!validation.success) {
            return (0, error_1.throwErr)(400, message);
        }
    }
    static data(data) {
        if (!data || data.length === 0)
            return (0, error_1.throwErr)(400, "data is required");
    }
    static async trim(data) {
        const invalid = Object.entries(data)
            .filter(([_, value]) => typeof value === "string" && value.trim() === "")
            .map(([key]) => key);
        if (invalid.length > 0) {
            return (0, error_1.throwErr)(400, `${invalid[0]} not empty`);
        }
        return null;
    }
    static async existOne(collection, id) {
        const data = await service_1.default.getOne(collection, id);
        if (!data)
            return (0, error_1.throwErr)(404, `data ${collection} doesn't exist`);
    }
}
exports.default = ValidationUtils;
