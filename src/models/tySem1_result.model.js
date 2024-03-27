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
    CyberSecurity: {
        type: String,
        required: true,
    },
    OOSE: {
        type: String,
        required: true
    },
    CoreJava: {
        type: String,
        required: true
    },
    Python: {
        type: String,
        required: true
    },

    
}, {timestamps: true})

export const TySem1Result = mongoose.model('TySem1Result', resultSchema)