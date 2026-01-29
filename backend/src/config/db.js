import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("hhh")
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("hhh")
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection failed");
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
