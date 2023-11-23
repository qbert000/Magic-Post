import * as z from 'zod'

export const OrderValidation = z.object({
    receiver: z.string().min(1),
    address: z.object({
        city: z.string(),
        district:z.string(),
        ward: z.string(),
    }),
    // city: z.string(),
    // district: z.string(),
    // ward: z.string(),
    // clearly: z.string(),
    sdt: z.string(),
    description: z.string(),
    // typeOrder:z.string(),
    // specialService: z.string(),
})