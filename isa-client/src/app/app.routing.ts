import {ModuleWithProviders}        from "@angular/core";
import {RouterModule, Routes}       from "@angular/router";
import { LoginComponent }           from "./components/login-component/login-component.component";
import { RegistrationComponent }    from "./components/registration-component/registration-component.component";
import { ProfileComponent }         from "./components/profile-component/profile-component.component";
import { HomeComponent } from "./components/home-component/home-component.component";
import { TheatresComponent } from "./components/theatre-component/theatre-component.component";
import { CinemasComponent } from "./components/cinema-component/cinema-component.component";
import { FanzoneComponent } from "./components/fanzone-component/fanzone-component.component";
import { AdditemComponent } from "./components/additem-component/additem-component.component";
import { EditItemComponent } from "./components/fanzone-component/edititem-component/edititem-component.component";
import { PendingComponent } from "./components/fanzone-component/pending-component/pending-component.component";
import { ItemprofileComponent } from "./components/fanzone-component/itemprofile-component/itemprofile-component.component";
import { ViewTheatreComponent } from "./components/viewTheatre-component/viewTheatre-component.component";


const appRoutes: Routes = 
[
    {  path: '',
       redirectTo: '/login', 
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
    {  path: 'addnewitem',
       component: AdditemComponent },
    {  path: 'edititem',
       component: EditItemComponent},
    {   path: 'pending',
        component: PendingComponent},
    {   path: 'itemprofile',
        component: ItemprofileComponent},
    {
        path: 'viewTheatre',
        component: ViewTheatreComponent
    }
    // {
    //     path: '**',
    //     component: PageNotFoundComponent
    // }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
