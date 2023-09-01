import { connectToDB } from "@/lib/db/mongoose";
import Product from "@/lib/models/productModel";
import { NextRequest, NextResponse } from "next/server";
import {ProductSchema} from "@/lib/validators/productValidators";
import z from 'zod';


connectToDB();
type ReqBodyType = z.infer<typeof ProductSchema>;
export async function POST(request: NextRequest) {
   
        try {
            const reqBody:ReqBodyType = await request.json();
            //! validate using zod validation
            try {
                ProductSchema.parse(reqBody);
              } catch (validationError:any) {
                console.log("Validation Errors:", validationError.errors);
        
                return NextResponse.json(
                  { error: validationError.errors },
                  { status: 400 }
                );
              }
              const newProduct = new Product({
                title:reqBody.title,
                description: reqBody.description,
                price: reqBody.price,
              });
              const savedProduct = await newProduct.save();
              console.log(savedProduct);
          
              return NextResponse.json(
                  {
                      message : 'Product added successfully',
                      success:true,
                      savedProduct
                  }
              )
    } catch (error) {
        console.log("Error from product/routets: ",error)
    }
}
