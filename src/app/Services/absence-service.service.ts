import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Absence } from '../model/absence.model';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {
  private apiUrl = 'https://mon-api.com/absences';

  constructor(private http: HttpClient) { }

  getAbsences(): Observable<Absence[]> {
    return this.http.get<Absence[]>(`${this.apiUrl}/all`);
  }

  addAbsence(absence: Absence): Observable<Absence> {
    return this.http.post<Absence>(`${this.apiUrl}/add`, absence);
  }

  deleteAbsence(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  updateAbsence(id: number, absence: Absence): Observable<Absence> {
    return this.http.put<Absence>(`${this.apiUrl}/update/${id}`, absence);
  }
}
