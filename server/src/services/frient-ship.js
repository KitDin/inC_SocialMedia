import { pool } from "../db/db.js";
import { getUserById } from "../services/user.js";

export async function getAllIdUserRequest(id) {
  const [row] = await pool.query(
    `
        select USER_SenderId,FR_CreateAt,FR_id
        from  __Friend_Request 
        where USER_RecID = ? ORDER BY FR_CreateAt desc
    `,
    [id]
  );
  return row;
}

export async function getFullInforUserAllUser(id) {
  const getIds = await getAllIdUserRequest(id);
  const userPromises = getIds.map(async (row) => {
    const user = await getUserById(row.USER_SenderId);
    console.log(`Fetched user: ${user.USER_Id}`);
    // Create an object that includes both user information and FR_CreateAt
    const userWithFRCreateAt = {
      ...user,
      FR_CreateAt: row.FR_CreateAt,
      FR_id: row.FR_id,
    };
    return userWithFRCreateAt;
  });
  const userInfor = await Promise.all(userPromises);
  return userInfor;
}

export async function updateStatusRequest(idRequest) {
  return await pool.query(
    `
  update __Friend_Request set FR_StatusReq = 1 where FR_id=?;
  `,
    [idRequest]
  );
}

export async function insertRequestToShip(idRequest) {
  return await pool.query(
    `\
  INSERT INTO __Friend_ship(FS_Id,USER_Id1,USER_Id2,FS_CreateAt)
  SELECT FR_id,USER_SenderId,USER_RecID,now() FROM __Friend_Request
  WHERE FR_id=?;`,
    [idRequest]
  );
}

export async function deleteRequestAccepted(idRequest) {
  return await pool.query(
    `
  delete from __Friend_Request where fr_id=?;
  `,
    [idRequest]
  );
}
