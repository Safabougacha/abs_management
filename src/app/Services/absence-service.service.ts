import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AbsenceService {
  private apiUrl = 'http://localhost:9995/api/absences/';

  constructor(private http: HttpClient) {}

  // Récupérer les absences d'un étudiant par son ID
  getAbsencesByEtudiantId(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?etudiantId=${id}`);
  }
}
