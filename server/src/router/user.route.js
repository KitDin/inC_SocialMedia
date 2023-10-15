import express from "express";
import {
  getUsersController,
  getUserController,
  register,
  login,
} from "../controllers/user.controller.js";

export const router = express.Router();

router.route("/").get(getUsersController);

router.route("/:id").get(getUserController);

router.route("/register").post(register);
router.route("/login").post(login);
