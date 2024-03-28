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
    HRM: {
        type: String,
        required: true
    },
    FianancialAccounting: {
        type: String,
        required: true
    }, 
    BussinessMathematics: {
        type: String,
        required: true
    },
    RDBMS: {
        type: String,
        required: true
    },
    webTechnology: {
        type: String,
        required: true
    },
    AdvanceC: {
        type: String,
        required: true
    }
}, {timestamps: true})

export const FySem2Result = mongoose.model('FySem2Result', resultSchema)