import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login-service.service';
import { Router } from '@angular/router';
import { DataService } from '../../services/data-service';
import { ProfileService } from '../../services/profile-service';

@Component({
  selector: 'login-component',
  templateUrl: './login-component.component.html',
  styleUrls : [`login-component.component.css`]
})
export class LoginComponent implements OnInit {
 
    private password : any;
    private email : any;
    private user : any;

    constructor(private loginService:LoginService, private profileService: ProfileService,
            private router : Router,
            private dataService : DataService) {

    }

    ngOnInit() {
     
      localStorage.setItem('token', 'asfas');
    }

    onSubmit() {
      
      this.loginService.getLogin(this.password, this.email)
      .subscribe( data=>{
        if(data.token != null)
        {
          localStorage.setItem('token', data.token);
          this.profileService.getLoggedUser().subscribe( data =>{
            this.user = data;
            
          } );
          this.moveOn();
          
        }

         
        
    } );

    
    }

    moveOn() {
      this.router.navigateByUrl("profile");
    }
}
