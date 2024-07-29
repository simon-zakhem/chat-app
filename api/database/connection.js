import mongoose from "mongoose"

const DbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Successfully connected to MongoDB");
    } catch(error) {
        console.log("Error connecting to MongoDB");
    }
}

export default DbConnection;