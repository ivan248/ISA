import { BrowserModule }                        from '@angular/platform-browser';
import { NgModule }                             from '@angular/core';
import { HttpModule }                           from '@angular/http';
import { ReactiveFormsModule,FormsModule }      from '@angular/forms';
import { RouterModule, Routes }                 from '@angular/router';




import { AppComponent }                         from './app.component';
import { LoginService }                         from './services/login-service.service';
import { LoginComponent }                       from './components/login-component/login-component.component';
import { RegistrationComponent }                from './components/registration-component/registration-component.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'login',   component: LoginComponent }, 
  { path: 'registration',   component: RegistrationComponent }

  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [ LoginService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
