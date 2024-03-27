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
    POM: {
        type: String,
        required: true
    }, 
    BC: {
        type: String,
        required: true
    },
    Clanguage: {
        type: String,
        required: true
    }, 
    DBMS : {
        type: String,
        required: true
    }, 
    Statistics: {
        type: String,
        required: true
    }, 
    PPA: {
        type: String, 
        required: true
    }
    
}, {timestamps: true})

export const FySem1Result = mongoose.model('FySem1Result', resultSchema)