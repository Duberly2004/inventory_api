import { model, Schema, Document } from "mongoose";
import { Role } from "../others/enums";
import { IUser } from "../others/interfaces";

export interface User extends IUser,Document {}

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    is_active:{
        type:Boolean,
        default:true
    },
    Role:{
        type:String,
        default:Role.CLIENT
    }
})


export default model<User>("User",userSchema)