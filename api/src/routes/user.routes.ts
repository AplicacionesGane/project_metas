import { getUsers, Login, getProfile } from '../controllers/user.controller';
import { authenticateToken } from '../middleware/verifyToken'
import { Router } from 'express';

export const UserRouter = Router();

UserRouter.get('/users', getUsers)

UserRouter.post('/login', Login)

UserRouter.get('/profile', authenticateToken, getProfile)