import { NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/config/dbConfig";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";

connectDB();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const user = await User.findOne({email: reqBody.email});
    if(user){
      throw new Error("User already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(reqBody.password, salt);
    reqBody.password = hashedPassword;

    await User.create(reqBody);
    return NextResponse.json(
      {message: "User created successfully", success: true},
      {status: 201}
    );
  } catch (error:any) {
    return NextResponse.json({message: error.message}, {status: 500});
  }
  
}
