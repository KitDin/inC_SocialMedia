import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

dotenv.config();

import { router } from "./src/router/user.route.js";
// import multer from "multer";

// const upload = multer({ dest: "./public/uploads/" });

const app = express();
app.use(morgan("combined"));
app.use(cors());
app.use(express.json());

// app.post("/upload_files", upload.array("files"), uploadFiles);

// function uploadFiles(req, res) {
//   console.log(req.body);
//   console.log(req.files);
//   res.json({ message: "Successfully uploaded files" });
// }
app.use("/api/users/", router);

app.listen(process.env.POST, () => {
  console.log(`Server is running on post ${process.env.POST}`);
});
