interface UserI {
  DOCUMENTO: string;
  NOMBRES: string;
  NOMBRECARGO: string;
}

interface SucursalI {
  ZONA: string;
  CODIGO: string;
  NOMBRE: string;
  DIRECCION: string;
  SUPERVISOR: string;
}

interface CategoriaI {
  CATEGORIZACION: string;
}

export interface ProfileDataI {
  user: UserI;
  sucursal: SucursalI;
  infCategoria: CategoriaI;
}

export interface CategoriasI {
  ANHO: number;
  MES: number;
  CATEGORIA: string;
  VERSION: string;
}