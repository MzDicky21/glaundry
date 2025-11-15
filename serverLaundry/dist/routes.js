"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const hono_1 = require("hono");
const customers_route_1 = require("./modules/customers/customers.route");
const laundries_route_1 = require("./modules/laundries/laundries.route");
exports.router = new hono_1.Hono()
    .route('/customers', customers_route_1.customersRouter)
    .route('/laundries', laundries_route_1.laundriesRouter);
