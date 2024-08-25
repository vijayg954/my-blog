import mongoose from "mongoose";

const DbConnect = async () => {
  const MONGO_URL = process.env.MONGO_URL;
  try {
    await mongoose.connect(MONGO_URL);
    console.log("MongoDB connected");
  } catch (err) {
    console.log("MongoDB not connected. Internal server error:", err);
  }
};

export default DbConnect;
