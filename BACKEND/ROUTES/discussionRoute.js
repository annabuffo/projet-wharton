import { Router } from "express";
import * as discussionsController from "../CONTROLLERS/discussionsController.js";
import { isAdmin, isAuthenticated } from "../MIDDLEWARES/auth.js";

const router = Router();

router.get("/", isAuthenticated, isAdmin, discussionsController.getAllDiscussions);
router.get("/:id", isAuthenticated, discussionsController.getDiscussionById);
router.post("/", isAuthenticated, discussionsController.createDiscussion);
router.put("/:id", isAuthenticated, discussionsController.updateDiscussion);
router.delete("/:id", isAuthenticated, discussionsController.deleteDiscussion);

export default router;

