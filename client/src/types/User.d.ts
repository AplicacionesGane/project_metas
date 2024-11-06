type Estado = 'A' | 'B'

export interface User {
  codigo: number,
  username: string,
  estado: Estado,
  nombres: string
}
