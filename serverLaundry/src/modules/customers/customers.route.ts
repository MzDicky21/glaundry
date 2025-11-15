import { Hono } from "hono";
import CustomersController from "./customers.controller";

export const customersRouter =
    new Hono()
        .get('/', CustomersController.getAll)
        .get('/:id', CustomersController.getOne)
        .post('/', CustomersController.create)
        .put('/:id', CustomersController.update)
        .delete('/:id', CustomersController.deleted)