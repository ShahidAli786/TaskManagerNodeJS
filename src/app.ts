import express from "express";
import cors from "cors";
import helmet from "helmet";
import userRouter from "./routers/userRouter";
import taskRoutes from "./routers/taskRouter";
const port = process.env.PORT || 3000;
const app = express();
const dotenv = require("dotenv");
dotenv.config();
import "./db/db";

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/auth", userRouter);
app.use(taskRoutes);
app.get("/", async (req, res) => {
  res.send("Server is working!!!");
});
app.listen(port, () => {
  console.log("Server is running on port 3000");
});

export default app;
