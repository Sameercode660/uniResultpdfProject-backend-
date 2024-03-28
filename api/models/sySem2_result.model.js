import mongoose, {Schema} from "mongoose";

const resultSchema = new Schema({
    rollNumber: {
        type: Number,
        required: true,
        unique: true
    }, 
    motherName: {
        type: String,
        required: true, 
        lowercase: true
    },
    studentName: {
        type: String,
        required: true,
    }, 
    courseName: {
        type: String, 
        required: true
    },
    networking: {
        type: String,
        requried: true
    },
    OOpsINCpp: {
        type: String,
        required: true
    },
    OS: {
        type: String,
        required: true
    },
    AdvPHP: {
        type: String,
        required: true
    }
}, {timestamps: true})

export const SySem2Result = mongoose.model('SySem2Result', resultSchema)