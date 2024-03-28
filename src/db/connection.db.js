import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        // const connectionInstance = await mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1')
        console.log(process.env.MONGO_DB_URI)
        const connectionInstance = await mongoose.connect(process.env.MONGO_DB_URI)
        console.log(connectionInstance.connection.host)
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export {connectDB}