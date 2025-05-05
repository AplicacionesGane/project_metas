export interface Vendedora {
	DOCUMENTO: string
	NOMBRES: string
	NOMBRECARGO: string
}

export interface SucursalInformation {
	ZONA: string
	CODIGO: string
	NOMBRE: string
	DIRECCION: string
	SUPERVISOR: string
	CATEGORIA: string
}

export interface DataUserProfile {
	user: Vendedora
	sucursal: SucursalInformation
	stateSalida: boolean
}

export interface AuthContextType {
	isAuthenticated: boolean;
	login: () => Promise<void>;
	logout: () => Promise<void>;
	user: DataUserProfile | null;
	setUser: React.Dispatch<React.SetStateAction<DataUserProfile | null>>;
}


export interface ComisionesI {
	FECHA: string;
	DOCUMENTO: string;
	CONCEPTO: string;
	REFERENCIA: string;
	VERSION: null;
}
