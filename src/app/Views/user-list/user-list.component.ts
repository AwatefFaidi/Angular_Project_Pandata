import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";
import {Users} from "../../models/users";
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(public http: HttpClient, public userservice: UsersService,
    public router:Router) { }
   

ngOnInit() {

}


onEditUser(id:number) {
this.router.navigate(['edituser',id]);
}
/*
onDeleteUser(user:Users){
let confirm=window.confirm('Are you sure ?');
if(confirm==true){
this.userservice.deleteUser(user.id)
.subscribe(data=>{
  console.log("Delete OK ");
},err=>{
  console.log(err);
})
}*/

}


  


  
 