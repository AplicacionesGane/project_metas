import { connectionOracle } from '../connections/oracledb';
import { User as UserPayload } from '../types/interfaces';
import { Categoria } from '../models/vCatgSucuPowebi';
import { Sucursal } from '../models/sucursalespw';
import { User } from '../models/vendedorespw';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;
const ENTORNO = process.env.ENV as string;
const TOKEN_NAME = process.env.TOKEN_NAME as string;

export async function Login(req: Request, res: Response) {
  const { username, password } = req.body

  if (!username || !password) {
    return res.status(400).json({ message: 'Usuario y contraseña son campos requeridos' })
  }

  try {
    const connection = await connectionOracle();

    if (connection instanceof Error) return res.status(500).json({ message: 'Error al conectar a la base de datos', error: connection });

    const { rows } = await connection.execute<string[]>(
      "SELECT get_authentication_msr(:password, :username) AS AUTH FROM dual",
      [password, username]
    );

    if (rows === undefined) return res.status(500).json({ message: 'Error al obtener el usuario en la base de datos' });

    // TODO: dividimos el resultado en un array de 3 elementos para validar el resultado
    const strResult = rows[0][0].split(',')

    if (strResult[0] === 'No data found') return res.status(401).json({ message: 'Usuario no encontrado o no existe' });
    if (strResult[0] === 'FALSE' && strResult[2] === 'A') return res.status(401).json({ message: 'Contraseña incorrecta' });
    if (strResult[0] === 'TRUE' && strResult[2] === 'B') return res.status(401).json({ message: 'Usuario se encuentra bloqueado' });

    const zona = await Sucursal.findOne({
      attributes: ['ZONA'],
      where: { CODIGO: strResult[1] },
    })

    if (!zona) return res.status(404).json({ message: 'error al obtener la zona' })

    // TODO: creamos el payload del token que es el usuario
    const user = {
      sucursal: parseInt(strResult[1]),
      username: username as string,
      zona: parseInt(zona.dataValues.ZONA)
    }

    // TODO: asignamos el token al usuario con una duración de 2 horas
    jwt.sign(user, JWT_SECRET, { expiresIn: '2h' }, (err, token) => {
      if (err) return res.status(500).json({ message: 'Error al generar el token', err })

      // TODO: asignación del token a la cookie
      return res.cookie(TOKEN_NAME, token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 2,
        sameSite: 'lax',
        secure: ENTORNO !== 'dev' ? true : false
      }).status(200).json(user)
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error al obtener el usuario', error })
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
    const cedula = username.split('CV')[1]

    const Vendedor = await User.findOne({ 
      attributes: ['DOCUMENTO', 'NOMBRES', 'NOMBRECARGO'],
      where: { DOCUMENTO: cedula } 
    })
    const SucursalInfo = await Sucursal.findOne({
      attributes: ['NOMBRE', 'DIRECCION', 'SUPERVISOR'],
      where: { CODIGO: sucursal } 
    })

    const CategoriaInfo = await Categoria.findOne({
      attributes: ['CATEGORIZACION'],
      where: { SUCURSAL_CODIGO: sucursal }
    })

    if (!Vendedor || !SucursalInfo) return res.status(404).json({ message: 'Usuario no encontrado ó Sucursal no encontrada' })

    const InfoGeneral = {
      user: Vendedor,
      sucursal: SucursalInfo,
      infCategoria: CategoriaInfo
    }

    return res.status(200).json(InfoGeneral)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al obtener el perfil', error })
  }
}

export async function Logout(req: Request, res: Response) {
  try {
    return res.cookie(TOKEN_NAME, '', {
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