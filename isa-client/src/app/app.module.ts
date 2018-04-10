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
import { EditCinemaComponent } from './components/editCinema-component/editCinema-component.component';
import { EditTheatreComponent } from './components/editTheatre-component/editTheatre-component.component';
import { MyfanzoneComponent } from './components/fanzone-component/myfanzone-component/myfanzone-component.component';
import { AddnewitemComponent } from './components/fanzone-component/addnewitem-component/addnewitem-component.component';
import { NewitemComponent } from './components/fanzone-component/newitem-component/newitem-component.component';
import { NewItemService } from './services/newitem-service';
import { EditnewitemComponent } from './components/fanzone-component/editnewitem-component/editnewitem-component.component';
import { AddProjectionComponent } from './components/addProjection-component/addProjection-component.component';
import { NewitemprofileComponent } from './components/fanzone-component/newitemprofile-component/newitemprofile-component.component';
import { ItembidsComponent } from './components/fanzone-component/itembids-component/itembids-component.component';





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
    EditCinemaComponent,
    MyfanzoneComponent,
    AddnewitemComponent,
    EditTheatreComponent,
    MyfanzoneComponent,
    NewitemComponent,
    EditnewitemComponent,
    AddProjectionComponent,
    NewitemprofileComponent,
    ItembidsComponent
    
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
      BidService,
      NewItemService
               ],
  bootstrap: [AppComponent]
})
export class AppModule { }
