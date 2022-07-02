export class Alertsclass {
  constructor(public title: string, public subtitle: string, public data: any, public message: string) {
  }
}
export interface Collection {
  fechaTarea: string;
  nombre: string;
  direccion: string;
  email: string;
  contacto: string;
  telefono: string;
  bultos: number;
  valor: number;
  peso: number;
  comentarios: string;
}

export interface Delivery {
  fechaTarea: string;
  nombre: string;
  direccion: string;
  email: string;
  contacto: string;
  telefono: string;
  bultos: number;
  valor: number;
  peso: number;
  comentarios: string;
}

export interface Json {
  collection: Collection;
  delivery: Delivery;
  jobNo: string;
}

export interface jsonJob {
  json: Json;
}
