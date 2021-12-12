export interface Autor {
  nombre: string;
  apellido: string;
  cedula: string;
  nacimiento: Date;
  genero: string;
}

export interface Libro {
  lNombre: string;
  lCreacion: number;
  lGenero: string;
  lAutor: string;
}
