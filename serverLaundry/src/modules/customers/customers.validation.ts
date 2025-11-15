import { z } from "zod";

export const customersSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required' })
    .trim()
    .regex(/^[A-Za-z\s'.-]+$/, { message: 'Name must only contain letters and spaces' }),

  address: z
    .string()
    .min(1, { message: 'Address is required' })
    .trim(),

  noCall: z
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

export const customersSchemaOptional = z.object({
  name: z
    .string()
    .trim()
    .regex(/^[A-Za-z\s'.-]+$/, { message: 'Name must only contain letters and spaces' })
    .optional(),

  address: z
    .string()
    .trim()
    .optional(),

  noCall: z
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
