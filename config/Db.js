import mongoose from "mongoose";

const DbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/myblog", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongo connected");
  } catch (err) {
    console.log("mongo not connected internal server error", err);
  }
};

export default DbConnect;
