import clientPromise from "@/lib/mongodb";
import { userSignUpBackenSchema } from "@/lib/validators/signinValidators";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validationResult = userSignUpBackenSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { success: false, error: "Validation error.", errors: validationResult.error },
        { status: 400 }
      );
    }

    const data = validationResult.data;
    //!Test

    const client = await clientPromise;
    const users = client.db(process.env.DB_NAME).collection("users");

    const password = bcrypt.hashSync(data.password, 10);
    await users.insertOne({
      username:data.username,
      email:data.email,
      password:password
    });

    //*Test end
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log("There is an error", error);
  }
}