import z from "zod";

export const laundriesSchema = z.object({
    customerId: z
        .string(),
    jenis: z
        .string()
        .min(1, { message: 'jenis is required' }).trim(),
    heft: z
        .number()
        .min(1, { message: 'heft is required' }),
    count: z
        .number()
        .min(1, { message: 'count is required' }),
    price: z
        .number()
        .min(500, { message: 'price is required' }),
    pickupTime: z
        .number()
        .min(1, { message: 'pickup time is required' })
        .max(30, { message: 'pickup time must be less than 30 days' }),
    status: z
        .boolean()
        .default(false)
})

export const laundriesSchemaOptional = z.object({
    customerId: z
        .string()
        .optional(),
    jenis: z
        .string()
        .optional(),
    heft: z
        .number()
        .optional(),
    count: z
        .number()
        .optional(),
    price: z
        .number()
        .optional(),
    pickupTime: z
        .number()
        .max(30, { message: 'pickup time must be less than 30 days' })
        .optional(),
    status: z
        .boolean()
        .default(false)
        .optional()
})