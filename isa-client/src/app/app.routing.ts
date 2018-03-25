import {ModuleWithProviders}        from "@angular/core";
import {RouterModule, Routes}       from "@angular/router";
import { LoginComponent }           from "./components/login-component/login-component.component";
import { RegistrationComponent }    from "./components/registration-component/registration-component.component";
import { ProfileComponent }         from "./components/profile-component/profile-component.component";

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
       component: ProfileComponent }
    // {
    //     path: '**',
    //     component: PageNotFoundComponent
    // }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
