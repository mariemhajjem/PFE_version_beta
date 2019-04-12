import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url="http://localhost:3000/users"
  constructor(private http: HttpClient) { }
  private refreshNeeds = new Subject<void>();

  get refreshNeed() {
    return this.refreshNeeds;
  }
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
      return this.http.delete<User>(`${this.url}/${id}`).pipe(tap(()=>{
        this.refreshNeed.next();
      }));
    }
}
