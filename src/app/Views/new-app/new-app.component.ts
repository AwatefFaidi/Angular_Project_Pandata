import { Component, OnInit } from '@angular/core';
import { Applications } from 'src/app/models';
import { ApplicationsService } from 'src/app/services';


@Component({
  selector: 'app-new-app',
  templateUrl: './new-app.component.html',
  styleUrls: ['./new-app.component.css']
})
export class NewAppComponent implements OnInit {
application: Applications = new Applications();
mode:number=1;
  constructor(public applicationservice: ApplicationsService) {  }
  

  ngOnInit(): void {
  }
//console.log(this.contact);
saveApplication() {
this.applicationservice.saveApps(this.application)
.subscribe((data:any) => {
  console.log(data);
  this.application=data;
  this.mode=2;
}, err => {
  console.log(err);
});
}
}




