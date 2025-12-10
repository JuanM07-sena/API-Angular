export interface SimpsonCharacter {
 _id: string; 
  Nombre: string; 
  Imagen: string;
  Historia: string;
  Ocupacion: string;
}

export interface SimpsonResponse {

  results: SimpsonCharacter[]
}