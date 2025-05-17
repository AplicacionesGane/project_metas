export interface Vendedora {
	DOCUMENTO: string
	NOMBRES: string
	NOMBRECARGO: string
}

export interface Maquinas {
	MAQUINA: string
	DESCRIPCION: string
}

export interface SucursalInformation {
	ZONA: string
	CODIGO: string
	NOMBRE: string
	DIRECCION: string
	SUPERVISOR: string
	CATEGORIA: string | null
	MAQUINAS: Maquinas[] | null
}

export interface DataUserProfile {
	user: Vendedora
	sucursal: SucursalInformation
	stateSalida: boolean
	maquinas: boolean
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

export interface CategoriasI {
	ANHO: number;
	MES: number;
	CATEGORIA: string;
	VERSION: string;
}


export interface Sugeridos {
	ID: number;
	PRODUCTO: string;
	VTA_SUGERIDO: number;
	META_VALOR: number;
	ESTADO: string;
}

export interface ReportPremios {
	CONCEPTO: string
	ESTADO: string
	FECHA: string
	FECHACREATE: string
	FECHAUPDATE: string
	IDTRANSACCION: number
	LOGINAUTORIZA: string | null
	LOGINSOLICITUD: string
	NOTA: string | null
	SUCURSAL: string
	TERCERO: string
	VALOR: number
	VERSION: string | null
}