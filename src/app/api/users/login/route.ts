import connect from '../../../../../helper/DbConnect'
import User from '../../../../../helper/UserSchema'
import { NextRequest, NextResponse } from 'next/server'


// connect to database
connect()

export async function POST(request: NextRequest) {
    try {

        const reqBody = await request.json()
        const { email, password } = reqBody

        // console.log(reqBody)

        // checking the user  exists
        const user = await User.findOne({ email: email })
        // console.log(user)
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 400 })
        }


        console.log("User logged in")



        // create a token  data
        const tokenData = {
            username: user.username,
            email: user.email
        }


        const response = NextResponse.json({
            message: 'login successful',
            success: true,
        })

        return response




    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}