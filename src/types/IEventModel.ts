import mongoose, { Document } from "mongoose";

export interface IEventModel extends Document{
    user_id: mongoose.Types.ObjectId;
    tracking_id: string;
    eventType: string;
    foodType: string;
    anyReq: string; 
    shiftMorning: string;
    shiftAfternoon: string;
    shiftNight: string;
    date: Date;
    noOfEmployee: number;
    payment: number;
    address: string;
}