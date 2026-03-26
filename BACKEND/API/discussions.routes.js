import express from 'express';
import {
    getAllDiscussions,
    getDiscussionById,
    createDiscussion,
    updateDiscussion,
    deleteDiscussion,
} from "../CONTROLLERS/discussions.controller.js";

const router = express.Router();

router.get('/', getAllDiscussions);
router.get('/:id', getDiscussionById);
router.post('/', createDiscussion);
router.put('/:id', updateDiscussion);
router.delete('/:id', deleteDiscussion);

export default router;

