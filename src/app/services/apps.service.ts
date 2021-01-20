import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { App } from '../models';
//const apiUrl = 'http://localhost:4000';
@Injectable()
export class AppsService {
    constructor(private http: HttpClient) { }

    getAll() {
        //return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }
    getApp(id:number){
    //return  this.http.get(`${environment.apiUrl}/users`+id);
     


  }
  saveApps(apps:App){
    //return  this.http.post(`${environment.apiUrl}/users`,user);
      


  }
  updateApps(apps:App){
    //return  this.http.put(`${environment.apiUrl}/users`+user.id,user)
    ;
  }
  deleteApps(id:number){
    //return  this.http.delete(`${environment.apiUrl}/users`+id);
      

  }
}

