import mongoose from "mongoose";
import { type } from "node:os";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: [true, "Username must be unique"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email Must be Unique"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    }
})

const userModel = mongoose.model("users", userSchema);

export default userModel;