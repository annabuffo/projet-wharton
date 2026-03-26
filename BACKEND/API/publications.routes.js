import express from 'express';
import {
    getAllPublications,
    getPublicationById,
    createPublication,
    updatePublication,
    deletePublication,
} from "../CONTROLLERS/publications.controller.js";

const router = express.Router();

router.get('/', getAllPublications);
router.get('/:id', getPublicationById);
router.post('/', createPublication);
router.put('/:id', updatePublication);
router.delete('/:id', deletePublication);

export default router;