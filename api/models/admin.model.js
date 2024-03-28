import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true, 
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    secretCode: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
})

export const Admin = mongoose.model('Admin', adminSchema)