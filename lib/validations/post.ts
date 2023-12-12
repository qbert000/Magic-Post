import * as z from 'zod'

export const PostValidation = z.object({
    fullNameAndAdd: z.string(),
    phone: z.string(),
    code: z.string(),
    goods: z.string(),
    receiver: z.string(),
    content: z.string(),
    service:z.string(),
    contract:z.string(),
    instruction: z.string(),
    commit: z.string(),
    time: z.string(),
    signature:z.string(),
    postage: z.string(),
    weight:z.string(),
    cod:z.string(),
    transform: z.string(),
    
})