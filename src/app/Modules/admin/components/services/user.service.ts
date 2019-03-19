import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url="http://localhost:8000/users"
  constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${this.url}/`);
    }

    getById(id: number) {
        return this.http.get<User>(`${this.url}/users/${id}`);
    }
}
