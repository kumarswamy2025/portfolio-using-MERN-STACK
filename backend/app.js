import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import cors from "cors";
import { dbConnection } from "./database/connection.js";
import { errorMiddleware } from "./middlewares/error.js";
import userRouter from "./routes/userRouter.js";
import timelineRouter from "./routes/timelineRouter.js";
import messageRouter from "./routes/messageRouter.js";
import skillRouter from "./routes/skillRouter.js";
import softwareApplicationRouter from "./routes/softwareApplicationRouter.js";
import projectRouter from "./routes/projectRouter.js";

const app = express();
dotenv.config({ path: "./config/config.env" });



app.use(
  cors({
    origin: [process.env.PORTFOLIO_URL, process.env.DASHBOARD_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);


// routes controllers
app.use("/api/v1/user", userRouter);      //checked working properly  
app.use("/api/v1/timeline", timelineRouter);    //checked working properly
app.use("/api/v1/message", messageRouter);  //checked working properly
app.use("/api/v1/skill", skillRouter);     //checked working properly
app.use("/api/v1/softwareapplication", softwareApplicationRouter);  //checked working properly
app.use("/api/v1/project", projectRouter);   //checked working properly

dbConnection();
app.use(errorMiddleware);



export default app;
// completed upto here