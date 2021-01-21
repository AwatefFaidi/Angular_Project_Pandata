import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Applications } from '../models/applications';
const apiUrl = ' https://devautentica.brainyinteligencia.com';
@Injectable()
export class ApplicationsService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Applications[]>(`${apiUrl}/applications`);
    }
    getApp(id:number){
    return  this.http.get(`${apiUrl}/applications`+id);
  }
  saveApps(apps:Applications){
    return  this.http.post(`${apiUrl}/applications`,apps);

  }
  updateApps(apps:Applications){
    return  this.http.put(`${apiUrl}/applications`+apps.id,apps);
    
  }
  deleteApps(id:number){
    return  this.http.delete(`${apiUrl}/applications`+id);
      

  }
}

