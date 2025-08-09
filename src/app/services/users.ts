import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthRequest } from '../models/auth-request';

@Injectable({
  providedIn: 'root'
})
export class Users {
  private apiUrl = 'http://localhost:8082/users';

  constructor(private http: HttpClient) { }

  // Récupérer tous les utilisateurs
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/all`);
  }


  getLogin(authRequest: any): Observable<any> {
    return this.http.post<AuthRequest>(`${this.apiUrl}/login`, authRequest);
  }


  // Récupérer un utilisateur par ID
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  // Créer un nouvel utilisateur
  createUser(user: any): Observable<any> {
    return this.http.post<User>(`${this.apiUrl}/register`, user);
  }

  // Mettre à jour un utilisateur
  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, user);
  }

  // Supprimer un utilisateur
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}


