import { Router } from "express";
import * as loginController from "../CONTROLLERS/login.controller.js";
import  { isAuthenticated } from "../MIDDLEWARES/auth.js";

const router = Router();

router.get("/", isAuthenticated, isAdmin, loginController.getAllLogins);
router.get("/:id", loginController.getLoginById);
router.put("/:id", isAuthenticated, loginController.updateLogin);
router.delete("/:id", isAuthenticated, loginController.deleteLogin);

export default router;
