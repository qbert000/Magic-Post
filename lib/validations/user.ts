import * as z from 'zod'

// export const UserValidation = z.object ({
//     profile_photo: z.string().url(),
//     name: z.string().min(2).max(30),
//     username: z.string().min(2).max(30),
//     bio: z.string().min(2).max(30)
// })

export const UserValidation = z.object({
    firstName: z.string().min(2).max(30),
    lastName: z.string().min(2).max(20),
    image:z.string().url(),
})