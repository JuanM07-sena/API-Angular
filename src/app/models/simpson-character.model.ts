export interface SimpsonCharacter {
 _id: string; 
  name: string; 
  portrait_path: string;
  status: string;
  occupation: string;
  age: string;
  gender: string;
  birthdate: string;
  phrases: string;
}

export interface SimpsonResponse {

  results: SimpsonCharacter[]
}