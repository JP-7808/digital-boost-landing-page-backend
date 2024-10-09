import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: String,
    companyName: String,
    email: String,
    phoneNumber: String,
    message: String
    
});

export default mongoose.model('Contact', contactSchema);