import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map';
import {ApplicationsService} from "../../services/Applications.service";
import {Router} from "@angular/router";
import {Applications} from "../../models/applications";
@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit {

  constructor(public http: HttpClient, public applicationservice: ApplicationsService,
    public router:Router) { }
   

ngOnInit() {

}


onEditApp(id:number) {
this.router.navigate(['editapplication',id]);
}
/*
onDeleteApp(app:Applications){
let confirm=window.confirm('Are you sure ?');
if(confirm==true){
this.applicationservice.deleteApps(app.id)
.subscribe(data=>{
  console.log("Delete OK ");
},err=>{
  console.log(err);
})
}*/

}


  


  
 
