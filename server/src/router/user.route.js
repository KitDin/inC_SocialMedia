import express from "express";
import {
  getUsersController,
  getUserById,
  register,
  login,
} from "../controllers/user.controller.js";

export const router = express.Router();

router.route("/").get(getUsersController);

router.route("/:id").get(getUserById);

router.route("/register").post(register);
router.route("/login").post(login);
