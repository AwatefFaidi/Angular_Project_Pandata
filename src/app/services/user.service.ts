import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../models';
//const apiUrl = 'http://localhost:4000';
@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }
    getUser(id:number){
    return  this.http.get(`${environment.apiUrl}/users`+id);
     


  }
  saveUser(user:User){
    return  this.http.post(`${environment.apiUrl}/users`,user);
      


  }
  updateUser(user:User){
    return  this.http.put(`${environment.apiUrl}/users`+user.id,user)
    ;
  }
  deleteUser(id:number){
    return  this.http.delete(`${environment.apiUrl}/users`+id);
      

  }
}

