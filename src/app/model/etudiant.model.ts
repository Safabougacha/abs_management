import { Absence } from "./absence.model";
export interface Etudiant {
    utilisateurid: number;
    username: string;
    email: string;
    password: string;
    genre: string;
    formation: string;
    niveau: string;
    absences: Absence[];
  }
  