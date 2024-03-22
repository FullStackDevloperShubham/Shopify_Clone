import { NextResponse } from 'next/server';
import connect from '../../../../../accordien_three_db/DBConnect'
import Accordien_third from '../../../../../accordien_three_db/UserSchema'





// connect to database 
connect()

export async function POST(request: any) {
    try {
        const requestBody = await request.json();
        const { name, number, email } = requestBody

        // save into the database 
        const NewUser = new Accordien_third({
            name,
            number,
            email
        })
        const savedUser = await NewUser.save()


        // return responce
        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })


    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }
}