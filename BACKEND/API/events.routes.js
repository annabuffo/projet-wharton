import express from 'express';
import {
    getAllEvents,
    getEvenetsById,
    createEvent,
    updateEvent,
    deleteEvent,
} from "../CONTROLLERS/events.controller.js";

const router = express.Router();

router.get('/', getAllEvent);
router.get('/:id', getEventsById);
router.post('/', createEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

export default router;

