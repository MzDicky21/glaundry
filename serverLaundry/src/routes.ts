import { Hono } from "hono";
import { customersRouter } from "./modules/customers/customers.route";
import { laundriesRouter } from "./modules/laundries/laundries.route";

export const router =
    new Hono()
        .route('/customers', customersRouter)
        .route('/laundries', laundriesRouter)