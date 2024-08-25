import express from "express";
import cors from "cors";
import DbConnect from "./config/Db.js";
import dotenv from "dotenv";
import blogRoutes from "./routes/blogRoutes.js";
import userRoute from "./routes/userRoutes.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
DbConnect();

app.use("/api/v1", blogRoutes);
app.use("/api/v1", userRoute);

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});
