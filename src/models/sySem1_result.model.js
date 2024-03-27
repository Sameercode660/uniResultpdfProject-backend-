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
    DM: {
        type: String,
        required: true
    }, 
    DS: {
        type: String,
        required: true
    },
    SE: {
        type: String,
        required: true
    },
    PHP: {
        type: String,
        required: true,
    }, 
    BigData: {
        type: String,
        required: true
    },
    EVS: {
        type: String,
        required: true
    }
}, {timestamps: true})

export const SySem1Result = mongoose.model('SySem1Result', resultSchema)