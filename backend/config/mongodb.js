import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log("DB Connected");
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
}

export default connectDB;