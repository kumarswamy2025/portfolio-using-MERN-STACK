import express from "express";
import {
  addNewApplication,
  deleteApplication,
  getAllApplications,
} from "../controller/softwareApplicationController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/add", isAuthenticated, addNewApplication); //working properly
router.delete("/delete/:id", isAuthenticated, deleteApplication);  //working properly
router.get("/getall", getAllApplications);   //working properly

export default router;
