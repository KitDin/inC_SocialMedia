import express from "express";
import {
  getUsersController,
  getUserController,
  register,
  login,
} from "../controllers/user.controller.js";

import {
  getAllIdUserRequestController,
  acceptRequest,
} from "../controllers/friend-ship.controller.js";

export const router = express.Router();

router.route("/").get(getUsersController);
router.route("/:id").get(getUserController);
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/frients/:id").get(getAllIdUserRequestController);
router.route("/frients/:id").post(acceptRequest);
