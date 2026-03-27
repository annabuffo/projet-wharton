import { Router } from "express";
import * as usersController from "../CONTROLLERS/users.controller.js";
import { isAuthenticated } from "../MIDDLEWARES/auth.js";

const router = Router();

router.get("/", isAuthenticated, isAdmin, usersController.getAllUsers);
router.get("/:id", usersController.getUsersById);
router.put("/:id", isAuthenticated, usersController.updateUser);
router.delete("/:id", isAuthenticated, usersController.deleteUser);

export default router;

