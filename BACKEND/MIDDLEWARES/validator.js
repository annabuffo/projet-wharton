import { validationResult } from 'express-validator';

// Middleware pour valider les données de la requête et gérer les erreurs de validation

export const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
