import express from "express";
import {
  deleteTimeline,
  getAllTimelines,
  postTimeline,
  // updateTimeline,
} from "../controller/timelineController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

 router.post("/add", isAuthenticated, postTimeline);   //working properly
router.delete("/delete/:id", isAuthenticated, deleteTimeline);     //working properly
router.get("/getall", getAllTimelines);   //working properly

export default router;


// completd upto here