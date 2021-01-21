import { Component, OnInit } from '@angular/core';
import {Users} from "../../models/users";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  user: Users = new Users();
   mode:number=1;
  constructor(public useerservice: UsersService) {  }

  ngOnInit(): void {}
  
  saveUser() {
      this.useerservice.saveUser(this.user)
      .subscribe((data:any) => {
        console.log(data);
        this.user=data;
        this.mode=2;
      }, err => {
        console.log(err);
        
      });
  }
}
