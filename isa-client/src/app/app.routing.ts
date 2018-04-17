import {ModuleWithProviders}        from "@angular/core";
import {RouterModule, Routes}       from "@angular/router";
import { LoginComponent }           from "./components/login-component/login-component.component";
import { RegistrationComponent }    from "./components/registration-component/registration-component.component";
import { ProfileComponent }         from "./components/profile-component/profile-component.component";
import { HomeComponent } from "./components/home-component/home-component.component";
import { TheatresComponent } from "./components/theatre-component/theatre-component.component";
import { CinemasComponent } from "./components/cinema-component/cinema-component.component";
import { FanzoneComponent } from "./components/fanzone-component/fanzone-component.component";
import { AdditemComponent } from "./components/fanzone-component/additem-component/additem-component.component";
import { EditItemComponent } from "./components/fanzone-component/edititem-component/edititem-component.component";
import { PendingComponent } from "./components/fanzone-component/pending-component/pending-component.component";
import { ItemprofileComponent } from "./components/fanzone-component/itemprofile-component/itemprofile-component.component";
import { ViewTheatreComponent } from "./components/viewTheatre-component/viewTheatre-component.component";
import { ViewCinemaComponent } from "./components/viewCinema-component/viewCinema-component.component";
import { EditCinemaComponent } from "./components/cinema-component/editCinema-component/editCinema-component.component";
import { EditTheatreComponent } from "./components/theatre-component/editTheatre-component/editTheatre-component.component";
import { MyfanzoneComponent } from "./components/fanzone-component/myfanzone-component/myfanzone-component.component";
import { AddnewitemComponent } from "./components/fanzone-component/addnewitem-component/addnewitem-component.component";
import { EditnewitemComponent } from "./components/fanzone-component/editnewitem-component/editnewitem-component.component";
import { AddProjectionComponent } from './components/addProjection-component/addProjection-component.component';
import { NewitemprofileComponent } from "./components/fanzone-component/newitemprofile-component/newitemprofile-component.component";
import { ItembidsComponent } from "./components/fanzone-component/itembids-component/itembids-component.component";
import { ReservationComponent } from "./components/reservation-component/reservation-component.component";
import { SeatingChartComponent } from "./components/seating-chart-component/seating-chart.component";
import { LocationComponent } from "./components/location-component/location-component.component";

import { AcceptDeclineComponent } from "./components/reservation-component/accept-decline/accept-decline-component.component";

import { AllusersComponent } from "./components/allusers-component/allusers-component.component";

const appRoutes: Routes = 
[
    {  path: '',
       redirectTo: '/home', 
       pathMatch: 'full' }, 

    {  path: 'login',   
       component: LoginComponent }, 

    {  path: 'registration',   
       component: RegistrationComponent }, 

    {  path: 'profile',   
       component: ProfileComponent },
    {  path: 'home',   
       component: HomeComponent },
    {  path: 'profile',   
       component: ProfileComponent },

    {  path: 'theatres',   
       component: TheatresComponent },
    {  path: 'cinemas',   
       component: CinemasComponent },
    {  path: 'fanzone',
       component: FanzoneComponent },
    {  path: 'additem',
       component: AdditemComponent },
    {  path: 'edititem',
       component: EditItemComponent},
    {   path: 'pending',
        component: PendingComponent},
    {   path: 'itemprofile',
        component: ItemprofileComponent},
    {
        path: 'viewTheatre',
        component: ViewTheatreComponent},
    {
        path: 'viewCinema',
        component: ViewCinemaComponent
    },
    {
        path: 'editCinema',
        component: EditCinemaComponent
    },
    {
        path: 'editTheatre',
        component: EditTheatreComponent
    },
    {
        path: 'myfanzone',
        component: MyfanzoneComponent},
    {
        path: 'addnewitem',
        component: AddnewitemComponent},
    {
        path: 'editnewitem',
        component: EditnewitemComponent}, 
    {
        path: 'addProjection',
        component: AddProjectionComponent},    
    {
        path: 'newitemprofile',
        component: NewitemprofileComponent},    
    {
        path: 'showbids',
        component: ItembidsComponent
    },
    {
        path: 'reservation',
        component: ReservationComponent},
    {
        path: 'seatings',
        component: SeatingChartComponent},
    {
        path: 'invitation/:id',
        component: AcceptDeclineComponent},
    {
        path: 'location',
        component: LocationComponent},  
    {
        path: 'allusers',
        component: AllusersComponent
    }
    
    // {
    //     path: '**',
    //     component: PageNotFoundComponent
    // }
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
