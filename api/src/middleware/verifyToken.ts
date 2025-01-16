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

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.cookies[API_TOKEN_NAME] as string;

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, API_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        if (err.name === 'TokenExpiredError') {
          return res.status(401).json({ message: 'Token expired' });
        }
        return res.status(401).json({ message: 'Invalid token' });
      }

      const user = decoded as User;
      req.user = user;
      next();
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error al verificar el token', error });
  }
}