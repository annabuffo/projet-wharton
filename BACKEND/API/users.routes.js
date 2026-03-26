import express from 'express';
import {
    getAllUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser,
} from "../CONTROLLERS/users.controller.js";

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUsersById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;

