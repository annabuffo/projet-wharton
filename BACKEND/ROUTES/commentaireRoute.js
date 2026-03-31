import { Router } from "express";
import * as commentairesController from "../CONTROLLERS/commentairesController.js";
import  { isAuthenticated } from "../MIDDLEWARES/auth.js";

const router = Router();

router.get("/", isAuthenticated, commentairesController.getAllCommentaires);
router.get("/:id", isAuthenticated, commentairesController.getCommentaireById);
router.post("/", isAuthenticated, commentairesController.createCommentaire);
router.put("/:id", isAuthenticated, commentairesController.updateCommentaire);
router.delete("/:id", isAuthenticated, commentairesController.deleteCommentaire);

export default router;