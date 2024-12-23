import mongoose, { Schema } from "mongoose";
import { ICounter } from "../types/ICounter";

const Counter: Schema = new Schema({
    name: { type: String, required: true, unique: true },
    sequenceValue: { type: Number, default: 0 }
  });
  
  export default mongoose.model<ICounter>("Counter", Counter);