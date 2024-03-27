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
    RTIT: {
        type: String,
        required: true,
    },
    SoftwareTesting: {
        type: String,
        required: true
    },
    AdvanceJava: {
        type: String,
        required: true
    },
    Android: {
        type: String,
        required: true
    },
}, {timestamps: true})

export const TySem2Result = mongoose.model('TySem2Result', resultSchema)