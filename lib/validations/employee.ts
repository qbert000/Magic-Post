import * as z from 'zod'

export const EmployeeValidation = z.object({
    id: z.string(),
    carrer : z.string(),
    city: z.string(),
    district: z.string(),
    firstName: z.string(),
    lastNamr: z.string(),


})