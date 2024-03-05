import { Seance } from "./seance.model";
export interface Enseignant {
    utilisateurid: number;
    username: string;
    email: string;
    password: string;
    seances: Seance[];
  }
  