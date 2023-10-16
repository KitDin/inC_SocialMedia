import { pool } from "../db/db.js";

export async function checkAccout_Password(accountName, email, password) {
  const [row] = await pool.query(
    `
  select * 
  from __USER 
  where (USER_AccountName = ? or USER_Email = ?) and user_password = ?
  `,
    [accountName, email, password]
  );
  const check = row.length > 0;
  return check;
}

export async function getUsers() {
  const [row] = await pool.query(
    " select * from __USER U left join __USER_INFOR UI on U.USER_Id=UI.USER_Id"
  );
  return row;
}

export async function getUser(username, email) {
  const [row] = await pool.query(
    `
  select * 
  from __USER 
  where USER_AccountName = ? or USER_Email = ?
  `,
    [username, email]
  );
  return row[0];
}

export async function getUserById(id) {
  const [row] = await pool.query(
    `
  select * from __USER U left join __USER_INFOR UI on U.USER_Id=UI.USER_Id where U.USER_Id = ?;
  `,
    [id]
  );
  return row[0];
}

export async function getAccountName_Email(accountName, email) {
  const [row] = await pool.query(
    `
  select * 
  from __USER 
  where USER_AccountName = ? or USER_Email = ?
  `,
    [accountName, email]
  );
  const check = row.length > 0;
  return check;
}

export async function createUser(
  USER_AccountName,
  USER_Email,
  USER_Password,
  USER_UpdateAt
) {
  const [INSERT] = await pool.query(
    `INSERT INTO 
    __user( USER_AccountName, USER_Email, USER_Password, USER_CreateAt, USER_UpdateAt) 
    VALUES (?,?,?,?,?)`,
    [USER_AccountName, USER_Email, USER_Password, new Date(), USER_UpdateAt]
  );
  return [INSERT.insertId, USER_AccountName, USER_Email];
}
