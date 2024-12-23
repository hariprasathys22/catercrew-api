import mongoose from "mongoose";
import Counter from "../models/CounterModel";

export const initializeCounter = async () => {
    try {
      const existingCounter = await Counter.findOne({ name: "trackingId" });
      if (!existingCounter) {
        await Counter.create({ name: "trackingId", sequenceValue: 0 });
        console.log("Counter initialized for trackingId");
      } else {
        console.log("Counter already exists");
      }
    } catch (err) {
      console.error("Error initializing counter:", err);
    } finally {
      mongoose.connection.close();
    }
  };
  