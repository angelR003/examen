import express from "express";
import dotenv from "dotenv";
dotenv.config();
import router from "./routes/gym.routes.js";
import path from "path";

const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join('./views/index.ejs', 'views'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/gyms", router);
export default app;
