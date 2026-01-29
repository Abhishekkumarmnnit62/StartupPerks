import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();


// Enable JSON parsing
app.use(express.json());

// Enable Mongoose debug to see queries and connection info
//mongoose.set("debug", true);

// MongoDB connection
const connectDB = async () => {
  try {
   
    const conn = await mongoose.connect(process.env.MONGO_URI, {
  dbName: "startUpPerks",
});
    //  console.log("conn ",conn)
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

// Start server after connecting to MongoDB
connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`🚀 Server running on port ${process.env.PORT}`);
  });
});

// Sample route
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

