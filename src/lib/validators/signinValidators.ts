import {z} from 'zod'


export const userSignInSchema = z.object({
    email: z.string().min(1, {
      message: "E-mail is required.",
    }).email(),
    password:z.string().min(1,{message:"Password is required"})
    
  })