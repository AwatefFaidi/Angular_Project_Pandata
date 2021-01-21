import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/Users';
const apiUrl = ' https://devautentica.brainyinteligencia.com';
@Injectable()
export class UsersService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Users[]>(`${apiUrl}/users`);
    }
    getUser(id:number){
    return  this.http.get(`${apiUrl}/users`+id);
     


  }
  saveUser(user:Users){
    return  this.http.post(`${apiUrl}/users`,user);
      


  }
  updateUser(user:Users){
    return  this.http.put(`${apiUrl}/users`+user.id,user)
    ;
  }
  deleteUser(id:number){
    return  this.http.delete(`${apiUrl}/users`+id);
      

  }
}

