import { Enseignant } from "./enseignant.model";
import { Module } from "./module.model";
export interface Seance {
    id: number;
    date: string;
    time: string;
    seanceEnseignant: Enseignant;
    seanceModule: Module;
  }
  