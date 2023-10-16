import {
  getFullInforUserAllUser,
  getAllIdUserRequest,
  updateStatusRequest,
  insertRequestToShip,
  deleteRequestAccepted,
} from "../services/frient-ship.js";

export async function getAllIdUserRequestController(req, res) {
  const id = req.params.id;
  const row = await getFullInforUserAllUser(id);
  res.send(row);
}

export async function acceptRequest(req, res) {
  try {
    const { idRequest } = req.body;
    const id = req.params.id;
    const update = await updateStatusRequest(idRequest);

    if (update) {
      const insert = await insertRequestToShip(idRequest);
      if (insert) {
        const del = await deleteRequestAccepted(idRequest);
        if (del) {
          res.json({
            mess: "thanh cong",
            a: del,
          });
        }
      }
    } else {
      res.json({
        mess: "that bai",
        a: update,
      });
    }
  } catch (error) {}
}
