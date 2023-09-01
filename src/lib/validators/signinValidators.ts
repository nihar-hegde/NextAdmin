import {z} from 'zod'


export const userSignInSchema = z.object({
    email: z.string().min(1, {
      message: "E-mail is required.",
    }).email('Invalid Email'),
    password:z.string().min(1,{message:"Password is required"})

  })

export const userSignUpSchema = z.object({
  username:z.string().min(1,{message:"Username is required!"}).max(35,{message:"max characters is 35"}),
  email: z.string().min(1, {
    message: "E-mail is required.",
  }).email('Invalid Email'),
  password:z.string().min(1,{message:"Password is required"}).min(6,{message:"Minimum 6 characters required!"})
  .max(30,{message:"Max 30 characters"}),
  confirmPassword:z.string().min(1,"Confirm Password is required!")
}).refine((data)=>data.password === data.confirmPassword,{
  path:['confirmPassword'],
  message: 'Password does not match'
})
export const userSignUpBackenSchema = z.object({
  username:z.string().min(1,{message:"Username is required!"}).max(35,{message:"max characters is 35"}),
  email: z.string().min(1, {
    message: "E-mail is required.",
  }).email('Invalid Email'),
  password:z.string().min(1,{message:"Password is required"}).min(6,{message:"Minimum 6 characters required!"})
  .max(30,{message:"Max 30 characters"}),
  })