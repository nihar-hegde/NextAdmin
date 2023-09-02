"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ProductSchema } from "@/lib/validators/productValidators"
import axios from 'axios'
import { useRouter } from "next/navigation"


const AddProudctForm = () => {
  const router = useRouter();
    const form = useForm<z.infer<typeof ProductSchema>>({
        resolver: zodResolver(ProductSchema),
      })
     
      async function onSubmit(data: z.infer<typeof ProductSchema>) {
        console.log(data)
        try {
          const productData = {
            title: data.title,
            description: data.description,
            price:data.price
          };
          console.log("send data", productData);
          const response = await axios.post("/api/products", productData);
          console.log("sign up success: ", response.data);
          router.push("/");
        } catch (error: any) {
          console.log("Error while signing up", error.message);
        }
      }
  return (
    <>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Description</FormLabel>
              <FormControl>
                <Input placeholder="Enter Description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Price</FormLabel>
              <FormControl>
                <Input placeholder="Enter Price"  {...field}   />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </>
  )
}

export default AddProudctForm