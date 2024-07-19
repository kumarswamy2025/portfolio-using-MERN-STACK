import express from "express";
import {
  getUser,
  login,
  logout,
  register,
  updatePassword,
  updateProfile,
  forgotPassword,
  resetPassword,
  getUserForPortfolio,
} from "../controller/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();
 //completed upto here
router.post("/register",register);     //checked working properly
router.post("/login", login);          //checked working properly
router.get("/me", isAuthenticated, getUser);     //checked working properly
router.get("/logout", isAuthenticated, logout);   //checked working properly
router.get("/portfolio/me", getUserForPortfolio);    //checked working properly
router.put("/update/password", isAuthenticated, updatePassword);  //checked working properly
router.put("/update/me", isAuthenticated, updateProfile);  //checked working properly
router.post("/password/forgot", forgotPassword);            //checked working properly
router.put("/password/reset/:token", resetPassword);        ////checked working properly

export default router;
