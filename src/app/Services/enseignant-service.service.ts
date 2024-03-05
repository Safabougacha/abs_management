import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enseignant } from '../model/enseignant.model';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  private apiUrl = 'https://mon-api.com/enseignants';

  constructor(private http: HttpClient) { }

  getEnseignants(): Observable<Enseignant[]> {
    return this.http.get<Enseignant[]>(`${this.apiUrl}/all`);
  }

  // Add more methods as needed for specific functionality
}
