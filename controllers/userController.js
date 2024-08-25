import User from "../models/usermodel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "user already exist backend",
      });
    }
    const newUser = new User({ name, email, password });
    newUser.password = await bcrypt.hash(password, 10);
    await newUser.save();
    res.status(200).json({
      success: true,
      message: "user created successfully backend",
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "user not created backend internal server error",
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(403).json({
        success: false,
        message: "email or password is wrong backend",
      });
    }
    const ispasswordEqual = await bcrypt.compare(password, user.password);
    if (!ispasswordEqual) {
      return res.status(403).json({
        success: false,
        message: "user exist  email or password is wrong backend",
      });
    }
    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    res.status(200).json({
      success: true,
      messaage: "loggedin successfully",
      jwtToken,
      name: user.name,
      email,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "user not exist internal server error backend",
      error: error.messaage,
    });
  }
};

export { login, signUp };
