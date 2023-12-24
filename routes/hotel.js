import express from "express";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getAllHotel,
  countByCity,
  countByType,
  getHotelRoom
} from "../controllers/hotels.js";
router.post("/", verifyAdmin, createHotel);
//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET
router.get("/find/:id", getHotel);
//GET ALL
router.get("/", getAllHotel);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

router.get("/room/:id",getHotelRoom)
export default router;
