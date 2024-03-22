import mongoose from 'mongoose';

// connect to mongodb 
const connect = async () => {
    try {

        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongodb connected : ${conn.connection.host}`)

    }
    catch (error) {
        console.error(`Error : ${error.message}`)
        // process.exit(1)
    }
}
// connect()
export default connect