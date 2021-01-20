import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { BasicAuthInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home/home.component';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';


import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialDesignModule } from './material-design/material-design.module';
import {  MatFormFieldModule} from '@angular/material/form-field';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
   
  imports: [
    BrowserModule,

    MaterialDesignModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
    FlexLayoutModule,
    MatFormFieldModule,
    
    FormsModule,
     ReactiveFormsModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
