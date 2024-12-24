import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;
    if (!mongoURI) {
      throw new Error("Mongo URI is not defined in environment variables");
    }

    // Attempt to connect to MongoDB (without the deprecated options)
    await mongoose.connect(mongoURI);

    console.log("MongoDB Connected");

    // Additional handling can go here for successful connection
    mongoose.connection.once('open', () => {
      console.log('MongoDB connection established');
    });

    // Error handling if connection fails after initial attempt
    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
    });
  } catch (e:any) {
    console.error('Error connecting to MongoDB:', e.message);
    process.exit(1); // Exit process with a failure code
  }
};

export default connectDB;
