import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const JWT_SECRET = process.env.JWT_SECRET;

export const generateToken = (user) => {
    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1d' });
    return token;
}

export const parseJwt = (token) => {
    const decToken = jwt.verify(token, JWT_SECRET);
    return decToken;
}
