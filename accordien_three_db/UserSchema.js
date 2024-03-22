import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    // define the field
    name: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }
})

const Accordien_third = mongoose.model.accordienThird || mongoose.model('accordienThird', UserSchema);
export default Accordien_third