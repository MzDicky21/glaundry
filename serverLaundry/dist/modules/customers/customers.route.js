"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customersRouter = void 0;
const hono_1 = require("hono");
const customers_controller_1 = __importDefault(require("./customers.controller"));
exports.customersRouter = new hono_1.Hono()
    .get('/', customers_controller_1.default.getAll)
    .get('/:id', customers_controller_1.default.getOne)
    .post('/', customers_controller_1.default.create)
    .put('/:id', customers_controller_1.default.update)
    .delete('/:id', customers_controller_1.default.deleted);
