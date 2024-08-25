import mongoose from "mongoose";

const DbConnect = async () => {
  const MONGO_URL=process.env.MONGO_URL
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongo connected");
  } catch (err) {
    console.log("mongo not connected internal server error", err);
  }
};

export default DbConnect;
