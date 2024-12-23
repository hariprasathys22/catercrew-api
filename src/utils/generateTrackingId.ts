import Counter from "../models/CounterModel";

export const generateTrackingId = async (): Promise<string> => {
  const prefix = "ORDER";

  try {
    const counter = await Counter.findOneAndUpdate(
      {
        name: "trackingId",
      },
      {
        $inc: { sequenceValue: 1 },
      },
      {
        new: true,
      }
    );
    const sequence = counter?.sequenceValue ?? 1; // Default to 1 if no counter exists
    const paddedSequence = sequence.toString().padStart(6, "0"); // Pad sequence with leading zeros
    return `${prefix}-${paddedSequence}`;
  } catch (e) {
    throw new Error(`Error generating tracking ID: ${e}`);
  }
};
