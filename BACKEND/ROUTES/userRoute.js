import { Router } from "express";
import * as usersController from "../CONTROLLERS/usersController.js";
import { isAuthenticated } from "../MIDDLEWARES/auth.js";

const router = Router();

router.get("/", isAuthenticated, usersController.getAllUsers);
router.get("/:id", isAuthenticated, usersController.getUserById);
router.post("/", isAuthenticated, usersController.createUser);
router.put("/:id", isAuthenticated, usersController.updateUser);
router.delete("/:id", isAuthenticated, usersController.deleteUser);

export default router;