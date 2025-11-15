"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customersSchemaOptional = exports.customersSchema = void 0;
const zod_1 = require("zod");
exports.customersSchema = zod_1.z.object({
    name: zod_1.z
        .string()
        .min(1, { message: 'Name is required' })
        .trim()
        .regex(/^[A-Za-z\s'.-]+$/, { message: 'Name must only contain letters and spaces' }),
    address: zod_1.z
        .string()
        .min(1, { message: 'Address is required' })
        .trim(),
    noCall: zod_1.z
        .string()
        .min(1, { message: 'Mobile number is required' })
        .trim()
        .regex(/^(\+62|0)[0-9]{9,13}$/, {
        message: 'Mobile number must start with +62 or 0 and contain 10–15 digits.',
    })
        .refine(val => !val.includes(' '), {
        message: 'Mobile number cannot contain spaces',
    }),
});
exports.customersSchemaOptional = zod_1.z.object({
    name: zod_1.z
        .string()
        .trim()
        .regex(/^[A-Za-z\s'.-]+$/, { message: 'Name must only contain letters and spaces' })
        .optional(),
    address: zod_1.z
        .string()
        .trim()
        .optional(),
    noCall: zod_1.z
        .string()
        .trim()
        .regex(/^(\+62|0)[0-9]{9,13}$/, {
        message: 'Mobile number must start with +62 or 0 and contain 10–15 digits.',
    })
        .refine(val => !val.includes(' '), {
        message: 'Mobile number cannot contain spaces',
    })
        .optional(),
});
