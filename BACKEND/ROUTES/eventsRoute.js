import { Router } from "express";
import * as loginController from "../CONTROLLERS/eventsController.js";
import  { isAuthenticated } from "../MIDDLEWARES/auth.js";

const router = Router();

router.get("/", isAuthenticated, isAdmin, eventsController.getAllEvents);
router.get("/:id", eventsController.getEventById);
router.put("/:id", isAuthenticated, eventsController.updateEvent);
router.delete("/:id", isAuthenticated, eventsController.deleteEvent);

export default router;
