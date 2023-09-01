"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSignInSchema } from "@/lib/validators/signinValidators";
import { z } from "zod";
import { Button } from "../ui/button";
import Link from "next/link";
import {signIn} from 'next-auth/react'
import { useRouter } from "next/navigation";



const SignInForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof userSignInSchema>>({
    resolver: zodResolver(userSignInSchema),
  });
  async function onSubmit(data: z.infer<typeof userSignInSchema>) {
    console.log(data);
    const result = await signIn('credentials',{
      email:data.email,
      password:data.password,
      redirect:false,      
    });
    if(result?.error){
      console.log(result.error);
    }else{
      router.push('/dashboard')
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="E-Mail" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" type="password" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full mt-7" type="submit">
          Sign In
        </Button>
      </form>
      <div
        className="mx-auto- my-4 flex w-full items-center justify-evenly before:mr-4
         before:block before:h-px before:flex-grow before:bg-stone-400
      after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400
      "
      >
        or
      </div>
      <p className="text-center text-sm text-gray-600 mt-2">
        If you don&apos;t have an account, Please&nbsp;
        <Link href={"/signup"} className="text-blue-500 hover:underline">
          Sign Up
        </Link>
      </p>
    </Form>
  );
};

export default SignInForm;
