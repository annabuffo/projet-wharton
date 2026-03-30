import express from "express";
import { path } from "app-root-path";
import { cors } from "cors";
import{ dotenv } from "dotenv";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import router from '../ROUTES/index.js';
import { verifyToken } from '../UTILS/jwt.js';

dotenv.config();

const app = express();

if (process.env.NODE_ENV === "production") {
    app.set("trust proxy", 1);
}

app.use(cors(
    origin: process.env.COR
))