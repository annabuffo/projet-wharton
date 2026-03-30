import { Router } from "express";
import * as commentairesController from "../CONTROLLERS/commentairesController.js";
import { authMiddleware, isAuthenticated } from "../MIDDLEWARES/auth.js";

const router = Router();

router.get("/", isAuthenticated, authController.getAllAuth);
router.get("/:id", isAuthenticated, authController.getAuthById);
router.post("/", isAuthenticated, authController.updateAuth);
router.delete("/:id", isAuthenticated, authMiddleware, authController.deleteAuth);

export default router;

