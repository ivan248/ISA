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
     
      localStorage.setItem('token', 'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJBTk9OWU1PVVMifV0sImFjdGl2aXR5IjowLCJleHAiOjE4MDE1MjQxNDA4NjksInVzZXIiOiJhbm5vbnltb3VzQGFubm9ueW1vdXMuY29tIn0.zPJuFvmBGAY5OnF_M3tJ0LRsvDqmPL9ppyZhJRmz6t8_qz8-RltwT8S14DrSGAB_lUKa5fIzf0yBPPfFe1QK9Q');
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
