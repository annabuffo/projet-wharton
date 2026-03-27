import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-for-dev';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '2h';

export const generateToken = (user) => {
    return jwt.sign(
        {id: user._id,
            email: user.email, role: user.role},
        JWT_SECRET,
        {expiresIn: JWT_EXPIRES_IN}
    );
};


/**
 * @param {string} token
 * @returns {object} decoded payload
 */
 
export const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET);
};