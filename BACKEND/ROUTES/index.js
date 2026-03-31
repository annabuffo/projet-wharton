import { Router } from "express";
import adminRoute from "../ROUTES/adminRoute.js";
import authRoute from "../ROUTES/authRoute.js";
import dashboardRoute from "../ROUTES/dashboardRoute.js";
import eventsRoute from "../ROUTES/eventsRoute.js";
import loginRoute from "../ROUTES/loginRoute.js";
import usersRoute from "../ROUTES/usersRoute.js";

const router = Router();

router.use("admin", adminRoute);
router.use("auth", authRoute);
router.use("discussion", discussionRoute);
router.use("events", eventsRoute);
router.use("login", loginRoute);
router.use("users", usersRoute);

//Metadata route

export default router;
