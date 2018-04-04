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
import { AdditemComponent } from './components/additem-component/additem-component.component'
import { ItemService } from './services/item-service';

import { ProfileService } from './services/profile-service';

import { DataService } from './services/data-service';
import { EditItemComponent } from './components/fanzone-component/edititem-component/edititem-component.component';
import { PendingComponent } from './components/fanzone-component/pending-component/pending-component.component';
import { CinemasService } from './services/cinemas-service.service';




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
    PendingComponent
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
        ProfileService
               ],
  bootstrap: [AppComponent]
})
export class AppModule { }
