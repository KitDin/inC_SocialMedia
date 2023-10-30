import express from "express";
import {
  getUsersController,
  getUserController,
  register,
  login,
  registerInfor,
} from "../controllers/user.controller.js";

import {
  getAllIdUserRequestController,
  acceptRequest,
} from "../controllers/friend-ship.controller.js";

import { postStatus } from "../controllers/post.controller.js";

import { upload, uploadStatus } from "../controllers/polices/polices.img.js";

export const router = express.Router();

router.route("/").get(getUsersController);
router.route("/:id").get(getUserController);
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/frients/:id").get(getAllIdUserRequestController);
router.route("/frients/:id").post(acceptRequest);
router.route("/information/upload").post(upload.array("file"), registerInfor);
router.route("/status/img").post(uploadStatus.array("file"), postStatus);

// app.post("/upload_files", upload.array("files"), uploadFiles);
