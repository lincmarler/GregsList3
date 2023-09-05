import { Schema, model } from "mongoose";


export const carSchema = new Schema({

    make: { type: String, required: true, minlength: 3 },
    model: { type: String, required: true, minlength: 3 },
    year: { type: Number, required: true, min: 1950 },
    price: { type: Number, required: true, min: 500 },
    color: { type: String, required: true, minlength: 7, maxlength: 7, default: '#ffffff' }
})