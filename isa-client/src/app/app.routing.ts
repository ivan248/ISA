import {ModuleWithProviders}        from "@angular/core";
import {RouterModule, Routes}       from "@angular/router";
import { LoginComponent }           from "./components/login-component/login-component.component";
import { RegistrationComponent }    from "./components/registration-component/registration-component.component";
import { ProfileComponent }         from "./components/profile-component/profile-component.component";
import { HomeComponent } from "./components/home-component/home-component.component";
import { TheatresComponent } from "./components/theatre-component/theatre-component.component";
import { CinemaComponent } from "./components/cinema-component/cinema-component.component";
import { FanzoneComponent } from "./components/fanzone-component/fanzone-component.component";


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

    {  path: 'theatres',   
       component: TheatresComponent },
    {  path: 'cinemas',   
       component: CinemaComponent },
    {  path: 'fanzone',
       component: FanzoneComponent }
    // {
    //     path: '**',
    //     component: PageNotFoundComponent
    // }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);