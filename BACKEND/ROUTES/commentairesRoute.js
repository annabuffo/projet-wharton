import { Router } from "express";
import * as commentairesController from "../CONTROLLERS/commentairesController.js";
import  { isAuthenticated } from "../MIDDLEWARES/auth.js";

const router = Router();

router.get("/", isAuthenticated, commentairesController.getAllCommentaires);
router.get("/:id", commentairesController.getCommentaireById);
router.post("/:id", isAuthenticated, commentairesController.updateCommentaire);
router.delete("/:id", isAuthenticated, commentairesController.deleteCommentaire);

export default router;