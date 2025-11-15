import { Hono } from "hono";
import LaundriesController from "./laundries.controller";

export const laundriesRouter =
    new Hono()
        .get('/', LaundriesController.getAll)
        .get('/:id', LaundriesController.getOne)
        .post('/', LaundriesController.create)
        .put('/:id', LaundriesController.update)
        .delete('/:id', LaundriesController.deleted)