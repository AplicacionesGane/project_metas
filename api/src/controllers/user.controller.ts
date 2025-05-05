import { API_TOKEN_NAME, API_TOKEN_SECRET, API_ENV } from '../config/enviroments';
import { getProfileByToken } from '../services/getProfileByToken';
import { HistLoginRegister } from '../services/historialLogin';
import { User as UserPayload } from '../types/interfaces';
import { validateCredentials } from '../schemas/validate';
import { getUserOracle } from '../services/oracleUser';
import { BaseError } from '../utils/baseError';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export async function Login(req: Request, res: Response) {
  try {
    const { username, password } = validateCredentials(req.body);
    const user = await getUserOracle(password, username);
    await HistLoginRegister(username, user.sucursal);

    jwt.sign(user, API_TOKEN_SECRET, { expiresIn: '2h' }, (err, token) => {
      if (err) return res.status(500).json({ message: 'Error al generar el token', err })

      // TODO: asignación del token a la cookie
      return res.cookie(API_TOKEN_NAME, token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 2,
        sameSite: 'lax',
        secure: API_ENV !== 'dev' ? true : false
      }).status(200).json(user)
    })
  } catch (error) {
    if(error instanceof BaseError){
      return res.status(error.statusCode).json({ message: error.message })
    }
    console.log(error);
    return res.status(500).json({ message: 'Error al intentar iniciar sesión' })
  }
}

/**
 * TODO: este controlador obtiene de la verificación del token, el username ('CV124124***') y la sucursal
 * TODO: y con esTo realiza las peticiones a la base de datos de powerbi ( Sucursales, Vendedores ) 
 * TODO: la idea de esto es unificarlo en un solo object para que el fron end pueda consumirlo en una sola petición
 **/
export async function getProfile(req: Request, res: Response) {
  try {
    const { sucursal, username } = req.user as UserPayload

    const InfoGeneral = await getProfileByToken(sucursal, username)

    return res.status(200).json(InfoGeneral)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al obtener el perfil', error })
  }
}

export async function Logout(req: Request, res: Response) {
  try {
    return res.cookie(API_TOKEN_NAME!, '', {
      httpOnly: true,
      expires: new Date(0),
      sameSite: 'lax',
      secure: API_ENV !== 'dev' ? true : false
    })
      .status(200)
      .json({ message: 'Sesión cerrada correctamente' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error al cerrar la sesión', error });
  }
}