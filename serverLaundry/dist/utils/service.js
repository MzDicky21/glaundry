"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const db_connect_1 = require("../config/db.connect");
const aggregate_1 = __importDefault(require("./aggregate"));
class ServiceUtils {
    static async getAll(collection) {
        try {
            const connection = await (0, db_connect_1.getConnectDb)(collection);
            const data = await connection.find().toArray();
            return data;
        }
        catch (error) {
            throw error;
        }
    }
    static async getOne(collection, id) {
        try {
            const connection = await (0, db_connect_1.getConnectDb)(collection);
            const data = await connection.findOne({
                _id: new mongodb_1.ObjectId(id)
            });
            return data;
        }
        catch (error) {
            throw error;
        }
    }
    static async aggregateToAll(collection, origin, localKey, foreignKey, alias, hasOne, project, pipeline) {
        try {
            const connection = await (0, db_connect_1.getConnectDb)(collection);
            const data = await aggregate_1.default.aggregateToAll(connection, origin, localKey, foreignKey, alias, hasOne, project || [], pipeline || []);
            return data;
        }
        catch (error) {
            throw error;
        }
    }
    static async aggregateToOne(collection, id, origin, localKey, foreignKey, hasOne, project, pipeline) {
        try {
            const connection = await (0, db_connect_1.getConnectDb)(collection);
            const data = await aggregate_1.default.aggregateToOne(id, connection, origin, localKey, foreignKey, hasOne, project || [], pipeline || []);
            return data;
        }
        catch (error) {
            throw error;
        }
    }
    static async create(collection, input) {
        try {
            const connection = await (0, db_connect_1.getConnectDb)(collection);
            const newData = {
                ...input,
                createdAt: new Date(),
                updatedAt: new Date()
            };
            const data = await connection.insertOne(newData);
            const find = await connection.findOne({
                _id: data.insertedId
            });
            return find;
        }
        catch (error) {
            throw error;
        }
    }
    static async update(collection, id, input) {
        try {
            const connection = await (0, db_connect_1.getConnectDb)(collection);
            const newData = {
                ...input,
                updatedAt: new Date()
            };
            await connection.updateOne({
                _id: new mongodb_1.ObjectId(id)
            }, {
                $set: newData
            });
            const find = await connection.findOne({
                _id: new mongodb_1.ObjectId(id)
            });
            return find;
        }
        catch (error) {
            throw error;
        }
    }
    static async delete(collection, id) {
        try {
            const connection = await (0, db_connect_1.getConnectDb)(collection);
            const data = await connection.deleteOne({
                _id: new mongodb_1.ObjectId(id)
            });
            return data;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = ServiceUtils;
