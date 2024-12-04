import { Request, Response, NextFunction } from 'express';
import { User } from '../types/interfaces';
import jwt from 'jsonwebtoken';

declare module 'express-serve-static-core' {
  interface Request {
    user?: User;
  }
}

const JWT_SECRET = process.env.JWT_SECRET as string;
const TOKEN_NAME = process.env.TOKEN_NAME as string;

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.cookies[TOKEN_NAME] as string;

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        if(err.name === 'TokenExpiredError') {
          return res.status(401).json({ message: 'Token expired' });
        }
        return res.status(403).json({ message: 'Invalid token' });
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