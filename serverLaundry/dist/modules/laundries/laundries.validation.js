"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.laundriesSchemaOptional = exports.laundriesSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.laundriesSchema = zod_1.default.object({
    customerId: zod_1.default
        .string(),
    jenis: zod_1.default
        .string()
        .min(1, { message: 'jenis is required' }).trim(),
    heft: zod_1.default
        .number()
        .min(1, { message: 'heft is required' }),
    count: zod_1.default
        .number()
        .min(1, { message: 'count is required' }),
    price: zod_1.default
        .number()
        .min(500, { message: 'price is required' }),
    pickupTime: zod_1.default
        .number()
        .min(1, { message: 'pickup time is required' })
        .max(30, { message: 'pickup time must be less than 30 days' }),
    status: zod_1.default
        .boolean()
        .default(false)
});
exports.laundriesSchemaOptional = zod_1.default.object({
    customerId: zod_1.default
        .string()
        .optional(),
    jenis: zod_1.default
        .string()
        .optional(),
    heft: zod_1.default
        .number()
        .optional(),
    count: zod_1.default
        .number()
        .optional(),
    price: zod_1.default
        .number()
        .optional(),
    pickupTime: zod_1.default
        .number()
        .max(30, { message: 'pickup time must be less than 30 days' })
        .optional(),
    status: zod_1.default
        .boolean()
        .default(false)
        .optional()
});
