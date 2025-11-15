"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbName = void 0;
exports.connectDb = connectDb;
const mongodb_1 = require("mongodb");
const url = process.env.DB_URL;
exports.dbName = process.env.DB_NAME;
const client = new mongodb_1.MongoClient(url);
async function connectDb() {
    try {
        await client.connect();
        const db = client.db(exports.dbName);
        return db;
    }
    catch (error) {
        throw error;
    }
}
