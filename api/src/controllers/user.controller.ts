import { User as UserPayload } from '../types/interfaces';
import { Request, Response } from 'express';
import { User } from '../models/user.model';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;
const ENTORNO = process.env.ENV as string;

export async function getUsers(req: Request, res: Response) {
  try {
    await User.sync()
    const users = await User.findAll()
    return res.status(200).json(users)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error al obtener los usuarios', error })
  }
}

export async function Login(req: Request, res: Response) {
  const { username, password } = req.body

  if (!username || !password) {
    return res.status(400).json({ message: 'Usuario y contraseña son campos requeridos' })
  }

  try {
    await User.sync()
    const user = await User.findOne({ where: { username } })

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }

    if (user.dataValues.password !== password) {
      return res.status(401).json({ message: 'Contraseña incorrecta' })
    }

    if (user.dataValues.estado !== 'A') {
      return res.status(401).json({ message: 'Usuario inactivo' })
    }

    const { password: _, ...userWithoutPassword } = user.dataValues

    jwt.sign(userWithoutPassword, JWT_SECRET, { expiresIn: '2h' }, (err, token) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: 'Error al generar el token', err })
      }

      return res.cookie('tokenMetasGane', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 2,
        sameSite: 'lax',
        secure: ENTORNO !== 'dev' ? true : false
      })
        .status(200)
        .json({ message: 'Usuario autenticado correctamente' })
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error al obtener el usuario', error })
  }
}

export async function getProfile(req: Request, res: Response) {
  try {
    const { codigo, nombres, username } = req.user as UserPayload 

    return res.status(200).json({ codigo, nombres, username })
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al obtener el perfil', error })
  }
}

export async function Logout(req: Request, res: Response) {
  try {
    return res.cookie('tokenMetasGane', '', {
      httpOnly: true,
      expires: new Date(0),
      sameSite: 'lax',
      secure: ENTORNO !== 'dev' ? true : false
    })
      .status(200)
      .json({ message: 'Sesión cerrada correctamente' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error al cerrar la sesión', error });
  }
}