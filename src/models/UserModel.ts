import { Schema, model } from "mongoose";
import { IUserModel } from "../types/IUserModel";



const User = new Schema<IUserModel>({
    name: { type: String, required: true },
    phoneNumber: { type: Number, required: true, unique: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, 
    role: { type: String, enum: ['caterer', 'member'], required: true },
}, { timestamps: true });


export default model<IUserModel>('User', User);