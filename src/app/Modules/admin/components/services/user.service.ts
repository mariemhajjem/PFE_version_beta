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

    getUserById(id) {
        return this.http.get<User>(`${this.url}/${id}`);
    }
    updateUser(id,user) {
       
      return this.http.put<User>(`${this.url}/${id}`, user);
    }

    deleteUser(id) {
      return this.http.delete<User>(`${this.url}/${id}`);
    }
}
