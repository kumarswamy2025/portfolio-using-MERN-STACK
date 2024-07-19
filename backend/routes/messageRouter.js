import express from "express";
import { deleteMessage, getAllMessages, sendMessage } from "../controller/messageController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/send", sendMessage);
// completed  upto here
router.delete("/delete/:id", isAuthenticated, deleteMessage);   //checked  woking properly
router.get("/getall", isAuthenticated, getAllMessages);   //checked  woking properly

export default router;
