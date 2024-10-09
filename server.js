import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import contactRoute from './routes/contact.js';

dotenv.config();
const app = express();
const PORT = 7700;


const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB.");

    }catch(error){
        console.error("Error connecting to mongoDb: ", error);
        throw error;
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("MongoDb Disconnected");
})

// middleware
app.use(cors({
    origin: 'https://digital-boost-landing-page-frontend.vercel.app/', // Allow only this origin
    methods: 'GET,POST,PUT,DELETE',
    credentials: true, // Allow cookies if needed
}));

app.use(express.json());

// Routes
app.use('/api/contact', contactRoute);


app.listen(PORT, () => {
    connect();
    console.log(`server is running on port ${PORT}`);
})