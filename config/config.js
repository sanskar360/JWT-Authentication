import dotenv from "dotenv";
import { error } from "node:console";

dotenv.config();

if(!process.env.MONGO_URI){
    throw new Error("MONGO_URI is not defined");
} 

if(!process.env.JWT_SECRET) { 
    throw new Error("JWT_SECRET is not defined in enviroment");
}

const config = {
    MONGO_URI : process.env.MONGO_URI,
    JWT_SECRET : process.env.JWT_SECRET
}

export default config;