import { API_TOKEN_NAME, API_TOKEN_SECRET } from '../config/enviroments';
import { Request, Response, NextFunction } from 'express';
import { User } from '../types/interfaces';
import jwt from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

const verifyToken = (token: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, API_TOKEN_SECRET, (err, decoded) => {
      if (err) return reject(err);
      resolve(decoded as User);
    });
  });
};

export const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies[API_TOKEN_NAME] as string;

    if (!token) return res.status(401).json({ message: 'No token provided' })

    const user = await verifyToken(token);
    req.user = user;
    next();
  } catch (err) {
    if (err instanceof Error) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Token expired' });
      }
      return res.status(401).json({ message: 'Invalid token' });
    }
    return res.status(500).json({ message: 'Internal server error' });
  }
};