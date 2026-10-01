import mongoose from "mongoose";
import { type } from "node:os";
import { refreshToken } from "../controllers/auth.controller.js";

const sessionSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required: [true, "User is required"]
    },
    refreshTokenHash: {
        type: String,
        required: [true, "Refresh taoken hash required"]
    },
    ip:{
        type: String,
        required: [true, "IP address is requires"]
    },
    userAgent: {
        type: String,
        required: [true, "User Agent is required"]
    },
    revoked: {
        type:Boolean,
        default:false
    },

},{
    timestamps: true
})

const sessionModel = mongoose.model("sessions", sessionSchema);

export default sessionModel;