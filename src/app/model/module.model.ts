import { Seance } from "./seance.model";
export interface Module {
    id: number;
    nom: string;
    nbHeures: number;
    seances_module: Seance[];
  }
  