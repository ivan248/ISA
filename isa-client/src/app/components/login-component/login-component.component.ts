import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login-component',
  templateUrl: './login-component.component.html',
  styles : [`
  
.form-signin {
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
  }
  .form-signin .form-signin-heading,
  .form-signin .checkbox {
    margin-bottom: 10px;
  }
  .form-signin .checkbox {
    font-weight: normal;
  }
  .form-signin .form-control {
    position: relative;
    height: auto;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    padding: 10px;
    font-size: 16px;
  }
  .form-signin .form-control:focus {
    z-index: 2;
  }
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  `]
})
export class LoginComponent implements OnInit {
 
    private password : any;
    private email : any;

    constructor(private loginService:LoginService,
            private router : Router) {

    }

    ngOnInit() {
      //localStorage.setItem('token', 'ovde bi token trebao da bude');

    }

    onSubmit() {

      console.log(localStorage.getItem('token') + " usao u login");
      this.loginService.getLogin(this.password, this.email)
      .subscribe( data=>{
        if(data.token != null)
        {
          localStorage.setItem('token', data.token);
          console.log(localStorage.getItem('token') + " usao u servis i pokupio token n");
          this.router.navigateByUrl("/profile");
        }

         
        
    } );

    console.log(localStorage.getItem('token') + " zavrio sa loginom");
    
    }
}
