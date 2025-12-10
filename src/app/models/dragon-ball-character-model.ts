export interface DragonCharacter {
  id: number;
  name: string;
  image: string;
  race: string;
  ki: string;
  description: string;
}


export interface DragonResponse {
  items: DragonCharacter[];
}