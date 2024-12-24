import express from 'express';
import connectDB from './config/database';
import dotenv from 'dotenv';
import authRoute from './routes/authRoute';
import eventRoute from './routes/eventRoute';
import { initializeCounter } from './config/trackingCounter';
import { errorHandler } from './middlewares/errorHandling';
dotenv.config();
const app = express();
const PORT = process.env.PORT ?? 5000;

connectDB();
initializeCounter()

app.use(express.json());
app.use('/auth', authRoute)
app.use('/api/events', eventRoute);


// server.ts
app.use(errorHandler); // Applied after all routes and middleware

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})
