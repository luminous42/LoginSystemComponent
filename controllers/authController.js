import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/tokenUtils.js";

// POST /auth/register
const register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { name, email, password, role = "user" } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(400).json({ error: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    const accessToken = generateAccessToken(newUser);
    const refreshToken = generateRefreshToken(newUser);

    res.status(201).json({
      message: "User registered successfully",
      accessToken,
      refreshToken,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched)
      return res.status(400).json({ error: "Invalid credentials" });

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    res.json({
      message: "Login successful",
      accessToken,
      refreshToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

const refresh = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken)
      return res.status(401).json({ error: "Refresh token required" });

    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) return res.status(401).json({ error: "Invalid refresh token" });

    const accessToken = generateAccessToken(user);
    res.json({ accessToken });
  } catch (err) {
    console.error("Refresh error:", err);
    res.status(401).json({ error: "Invalid refresh token" });
  }
};

const logout = (req, res) => {
  res.clearCookie("refreshToken");
  res.json({ message: "Logged out successfully" });
};

export { register, login, refresh, logout };
