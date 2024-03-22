import mongoose from "mongoose";

// dataase schema
const UserSchema = mongoose.Schema({
    // define filed 
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        unique: true,
        required: true,
    },
})


const User = mongoose.models.users || mongoose.model("users", UserSchema);
export default User