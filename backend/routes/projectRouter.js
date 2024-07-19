import express from "express";
import {
  addNewProject,
  deleteProject,
  getAllProjects,
  getSingleProject,
  updateProject,
} from "../controller/projectController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/add", isAuthenticated, addNewProject);   //working properly
router.delete("/delete/:id", isAuthenticated, deleteProject);    //working properly
router.put("/update/:id", isAuthenticated, updateProject);     //working properly
router.get("/getall", getAllProjects);    //working properly
router.get("/get/:id", getSingleProject);    //working properly

export default router;
