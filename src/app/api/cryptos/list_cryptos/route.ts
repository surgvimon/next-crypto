import { validateJWT } from "@/helpers/validateJWT";
import Crypto from "@/models/cryptoModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        // const userId = await validateJWT(request);
        const cryptos = await Crypto.find();
        if(!cryptos){
            throw new Error("Not found");
        }
        return NextResponse.json({
            message: "lists cryptos",
            data: cryptos,
        });        
    } catch (error:any) {
        return NextResponse.json({message: error.message}, {status: 500});
    }
}