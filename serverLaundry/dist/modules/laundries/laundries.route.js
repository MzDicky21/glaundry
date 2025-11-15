"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.laundriesRouter = void 0;
const hono_1 = require("hono");
const laundries_controller_1 = __importDefault(require("./laundries.controller"));
exports.laundriesRouter = new hono_1.Hono()
    .get('/', laundries_controller_1.default.getAll)
    .get('/:id', laundries_controller_1.default.getOne)
    .post('/', laundries_controller_1.default.create)
    .put('/:id', laundries_controller_1.default.update)
    .delete('/:id', laundries_controller_1.default.deleted);
