import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services';
import { User } from './models';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
@Component({ selector: 'app',
 templateUrl: 'app.component.html' })
export class AppComponent {
  /*  isDarkTheme: boolean = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );*/
    user: User;
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private breakpointObserver: BreakpointObserver
    ) {
        this.authenticationService.user.subscribe(x => this.user = x);
    }

    logout() {
        this.authenticationService.logout();
    }



  
  
/*
  ngOnInit() {
    this.isDarkTheme = localStorage.getItem('theme') === "Dark" ? true : false;
  }

  storeThemeSelection() {
    localStorage.setItem('theme', this.isDarkTheme ? "Dark" : "Light");
  }*/
}