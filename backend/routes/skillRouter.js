import express from "express";
import {
  addNewSkill,
  deleteSkill,
  getAllSkills,
  updateSkill,
} from "../controller/skillController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/add", isAuthenticated, addNewSkill);  //working properly
router.delete("/delete/:id", isAuthenticated, deleteSkill); //working properly
router.put("/update/:id", isAuthenticated, updateSkill);   //working properly
router.get("/getall", getAllSkills);    //working properly

export default router;
