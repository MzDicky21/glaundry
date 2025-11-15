"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConnectDb = getConnectDb;
const db_config_1 = require("./db.config");
async function getConnectDb(collection) {
    return (await (0, db_config_1.connectDb)()).collection(collection);
}
