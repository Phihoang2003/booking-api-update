import express from "express";

const router = express.Router();
import {
  updateUser,
  deleteUser,
  getUser,
  getAllUser,
} from "../controllers/users.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("Hello user,you are logged in");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("Hello user,you are logged in and you can delete your account");
});

router.get("/checkadmin", verifyAdmin, (req, res, next) => {
  res.send("Hello admin,you are logged in and you can delete all accounts");
});

//UPDATE
router.put("/:id", verifyUser, updateUser);
//DELETE
router.delete("/:id", verifyUser, deleteUser);
//GET
router.get("/:id", verifyUser, getUser);
//GET ALL
router.get("/", verifyAdmin, getAllUser);
export default router;
