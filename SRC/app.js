import express from "express";
import dotenv from "dotenv";
dotenv.config();
import router from "./routes/gym.routes.js";

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/gyms", router);
export default app;
