// import connect from "../../../../helper/DbConnect";
import { NextRequest, NextResponse } from "next/server";
import connect from '../../../../../helper/DbConnect'
import User from '../../../../../helper/UserSchema'








// Mongodb  Connection
connect()

export async function POST(request: NextRequest) {

    try {

        const requestBody = await request.json()

        const { email, password } = requestBody;
        // console.log(`email :${email} and password:${password}`);
        // checking user
        // const user = await User.findOne({ email })

        // if (user) {
        //     return NextResponse.json({ error: "User already exists" }, { status: 400 })
        // }


        // create a user to save into database
        const newUser = new User({
            email,
            password
        })

        const savedUser = await newUser.save()

        // console.log(`saved user: ${savedUser}`)

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })

    } catch (error: any) {
        return NextResponse.json({ error: error.message });

    }

}