import { Document } from "mongoose";

export interface IUserModel extends Document{
    name: string;
    phoneNumber: number;
    age: number;
    email: string;
    password: string;
    role: string;
}