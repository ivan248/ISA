import { BrowserModule }                        from '@angular/platform-browser';
import { NgModule }                             from '@angular/core';
import { ReactiveFormsModule,FormsModule }      from '@angular/forms';
import { RouterModule, Routes }                 from '@angular/router';
import { HttpClientModule, HttpClient}           from '@angular/common/http';




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
import { CinemasComponent } from './components/cinema-component/cinema-component.component';
import { FanzoneComponent } from './components/fanzone-component/fanzone-component.component';
import { ItemComponent } from './components/fanzone-component/item-component/item-component.component'
import { FanzoneService } from './services/fanzone-service';
import { AdditemComponent } from './components/fanzone-component/additem-component/additem-component.component'
import { ItemService } from './services/item-service';

import { ProfileService } from './services/profile-service';

import { DataService } from './services/data-service';
import { EditItemComponent } from './components/fanzone-component/edititem-component/edititem-component.component';
import { PendingComponent } from './components/fanzone-component/pending-component/pending-component.component';
import { CinemasService } from './services/cinemas-service.service';
import { ItemprofileComponent } from './components/fanzone-component/itemprofile-component/itemprofile-component.component';
import { BidService } from './services/bid-service';
import { ViewTheatreComponent } from './components/viewTheatre-component/viewTheatre-component.component';
import { ViewCinemaComponent } from './components/viewCinema-component/viewCinema-component.component';
<<<<<<< HEAD
import { EditCinemaComponent } from './components/editCinema-component/editCinema-component.component';
=======
import { MyfanzoneComponent } from './components/fanzone-component/myfanzone-component/myfanzone-component.component';
>>>>>>> b06df73fb3fc394ff9cb97bf788081f92b0f79cf




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    HomeComponent,
    TheatresComponent,
    CinemasComponent,
    FanzoneComponent,
    ItemComponent,
    AdditemComponent,
    EditItemComponent,
    PendingComponent,
    ViewTheatreComponent,
    ViewCinemaComponent,
    ItemprofileComponent,
<<<<<<< HEAD
    EditCinemaComponent
=======
    MyfanzoneComponent
>>>>>>> b06df73fb3fc394ff9cb97bf788081f92b0f79cf
  ],
  imports: [
    routing,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [ LoginService,
     HomeService, 
     TheatresService,
      FanzoneService,
       ItemService,
       DataService,
        CinemasService,
        ProfileService,
      BidService
               ],
  bootstrap: [AppComponent]
})
export class AppModule { }
