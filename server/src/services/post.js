import { pool } from "../db/db.js";

export async function postStatusImg(postId, img) {
  const [row] = await pool.query(
    `
  insert into  __IMGs_POST value (?,?);
  `,
    [postId, img]
  );
}

export async function postStatusContent(postId, userId, content, modifie) {
  await pool.query(
    `insert into __POSTs(POST_Id,USER_id,POST_Content,POST_AccessModifies, POST_Time) 
values (?,?,?,?,now());`,
    [postId, userId, content, modifie]
  );
}
