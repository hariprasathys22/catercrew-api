import { Schema, model } from "mongoose";
import { IEventModel } from "../types/IEventModel";
import { generateTrackingId } from "../utils/generateTrackingId";


const Events = new Schema<IEventModel>({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    tracking_id: { type: String, unique: true },
    eventType: { type: String, required: true },
    foodType: { type: String, enum: ['Veg', 'Non-Veg', "Both"], required: true },
    anyReq: { type: String, required: true },
    shiftMorning: { type: String, required: true },
    shiftAfternoon: { type: String, required: true },
    name: { type: String, required: true },
    shiftNight: { type: String, required: true },
    date: { type: Date, required: true },
    noOfEmployee: { type: Number, required: true },
    payment: { type: Number, required: true },
    address: { type: String, required: true },
})

Events.pre<IEventModel>("save", async function (next) {
    if(!this.tracking_id){
        this.tracking_id = await generateTrackingId();
    }
    next()
})

export default model<IEventModel>('Events', Events)