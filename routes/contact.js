import express from "express";
import Contact from "../models/Contact.js"


const router = express.Router();

router.post('/submit', async(req, res) => {
    
    try{
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(200).send('Contact saved successfully');

    }catch(error){
        res.status(500).send("Error saving contact" + error.message);

    }
});

export default router;