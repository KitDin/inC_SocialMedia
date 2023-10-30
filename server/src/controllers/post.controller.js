import { postStatusImg, postStatusContent } from "../services/post.js";

export async function postStatus(req, res) {
  const files = req.files.map((file) => file.filename);
  const { POST_Id, USER_Id, POST_Content, POST_AccessModifies } = req.body;

  try {
    await postStatusContent(
      POST_Id,
      USER_Id,
      POST_Content,
      POST_AccessModifies
    );
    for (let index = 0; index < files.length; index++) {
      await postStatusImg(POST_Id, files[index]);
    }
    res.json({
      status: "sucessfull",
      mess: "Thành công",
    });
  } catch (error) {
    console.log(error);
  }
}
