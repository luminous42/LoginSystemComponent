import express from "express";
import { body } from "express-validator";
import {
  register,
  login,
  refresh,
  logout,
} from "../controllers/authController.js";

const router = express.Router();

router.post(
  "/register",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
  ],
  register
);

router.post("/login", login);

router.post("/refresh", refresh);

router.post("/logout", logout);

export default router;
