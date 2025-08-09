import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Etablissement } from '../models/etablissement';

@Injectable({
  providedIn: 'root'
})
export class Etabissement {
  private apiUrl = 'http://localhost:8082/etablissement'; 

  constructor(private http: HttpClient) { }

  getAllEtablissements(): Observable<Etablissement[]> {
    return this.http.get<Etablissement[]>(`${this.apiUrl}/all`);
  }

  getEtablissementById(id: number): Observable<Etablissement> {
    return this.http.get<Etablissement>(`${this.apiUrl}/${id}`);
  }

  createEtablissement(etablissement: any): Observable<any> {
    return this.http.post<Etablissement>(`${this.apiUrl}/add`, etablissement);
  }

  updateEtablissement(id: number, etablissement: Etablissement): Observable<Etablissement> {
    return this.http.put<Etablissement>(`${this.apiUrl}/${id}`, etablissement);
  }

  deleteEtablissement(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // uploadLogo(id: number, file: File): Observable<any> {
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   return this.http.post(`${this.apiUrl}/${id}/logo`, formData);
  // }


  
}
