import { getDatafromToken } from "@/helpers/getDatafromToken";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/app/dbConfig/dbConfig";

connect()

export const GET = async(request: NextRequest) => {
    try {
        const userId = await getDatafromToken(request);
        const user = await User.findOne({_id: userId}).select("-password");
        return NextResponse.json({
            message: "user found",
            data: user
        })
    } catch (error) {
        
    }
}