import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Concours {

  private apiUrl = 'http://localhost:8082/concours'; 

  constructor(private http: HttpClient) { }

  // Récupérer tous les concours
  getAllConcours(): Observable<Concours[]> {
    return this.http.get<Concours[]>(this.apiUrl);
  }

  // Récupérer un concours par ID
  getConcoursById(id: number): Observable<Concours> {
    return this.http.get<Concours>(`${this.apiUrl}/${id}`);
  }

  // Créer un nouveau concours
  createConcours(concours: any): Observable<any> {
    return this.http.post<Concours>(`${this.apiUrl}/add`, concours);
  }

  // Mettre à jour un concours existant
  updateConcours(id: number, concours: Concours): Observable<Concours> {
    return this.http.put<Concours>(`${this.apiUrl}/${id}`, concours);
  }

  // Supprimer un concours
  deleteConcours(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
}
