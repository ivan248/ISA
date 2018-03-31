import { BrowserModule }                        from '@angular/platform-browser';
import { NgModule }                             from '@angular/core';
import { ReactiveFormsModule,FormsModule }      from '@angular/forms';
import { RouterModule, Routes }                 from '@angular/router';
import {HttpClientModule, HttpClient}           from '@angular/common/http';




import { AppComponent }                         from './app.component';
import { LoginService }                         from './services/login-service.service';
import { LoginComponent }                       from './components/login-component/login-component.component';
import { RegistrationComponent }                from './components/registration-component/registration-component.component';
import { ProfileComponent }                     from './components/profile-component/profile-component.component';
import { routing }                              from './app.routing';
import { HomeComponent } from './components/home-component/home-component.component';
import { TheatresComponent } from './components/theatre-component/theatre-component.component';
import { HomeService } from './services/home-service.service';
import { TheatresService } from './services/theatres-service.service';
import { CinemaComponent } from './components/cinema-component/cinema-component.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    HomeComponent,
    TheatresComponent,
    CinemaComponent
  ],
  imports: [
    routing,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ LoginService, HomeService, TheatresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
