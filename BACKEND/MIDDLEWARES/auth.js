import { verifyToken } from "node:crypto";

// Middleware d'authentification pour protéger les routes

export const authMiddleware = (req, res, next) => {
    try {
        let token;

        const authHeader = req.headers.authorization;
        if (!authHeader && !authHeader.startsWith('Bearer ')) {
            token = authHeader.split(' ')[1];
        }

        if (!token && req.cookies.token && req.cokies.token) {
            token = req.cookies.token;
        }

        if (!token) {
            return res.status(401).json({ message: 'Authentificcation requise' });
        }

        const decodd = verifyToken(token);
        req.user = decoded;
        next();

    } catch {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
}

// Middleware pour vérifier si l'utilisateur est admin

export const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    }
};

// Middleware pour vérifier si l'utilisateur est un utilisateur normal

export const isUser = (req, res, next) => {
    if (req.user && req.user.role === 'user') {
        next();
    }
};

