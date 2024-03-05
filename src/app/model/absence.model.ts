import { Etudiant } from './etudiant.model';
import { Seance } from './seance.model';

export interface Absence {
  absenceId: number;
  affirmation: string;
  absenceEtudiant: Etudiant;
  absenceSeance: Seance;
}
