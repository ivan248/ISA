import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login-service.service';
import { Router } from '@angular/router';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'login-component',
  templateUrl: './login-component.component.html',
  styles : [`
  @import url("//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css");
  .login-block{
      background: #DE6262;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #FFB88C, #DE6262);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #FFB88C, #DE6262); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  float:left;
  width:100%;
  padding : 50px 0;
  }
  .banner-sec{background:url(https://open-stand.org/wp-content/uploads/2016/04/International-Union-of-Cinemas-Calls-for-Open-Standards-in-the-Cinema-Industry.jpg)  no-repeat left bottom; background-size:cover; min-height:500px; border-radius: 0 10px 10px 0; padding:0;}
  .container{background:#fff; border-radius: 10px; box-shadow:15px 20px 0px rgba(0,0,0,0.1);}
  .carousel-inner{border-radius:0 10px 10px 0;}
  .carousel-caption{text-align:left; left:5%;}
  .login-sec{padding: 50px 30px; position:relative;}
  .login-sec .copy-text{position:absolute; width:80%; bottom:20px; font-size:13px; text-align:center;}
  .login-sec .copy-text i{color:#FEB58A;}
  .login-sec .copy-text a{color:#E36262;}
  .login-sec h2{margin-bottom:30px; font-weight:800; font-size:30px; color: #DE6262;}
  .login-sec h2:after{content:" "; width:100px; height:5px; background:#FEB58A; display:block; margin-top:20px; border-radius:3px; margin-left:auto;margin-right:auto}
  .btn-login{background: #DE6262; color:#fff; font-weight:600;}
  .banner-text{width:70%; position:absolute; bottom:40px; padding-left:20px;}
  .banner-text h2{color:#fff; font-weight:600;}
  .banner-text h2:after{content:" "; width:100px; height:5px; background:#FFF; display:block; margin-top:20px; border-radius:3px;}
  .banner-text p{color:#fff;}
  `]
})
export class LoginComponent implements OnInit {
 
    private password : any;
    private email : any;

    constructor(private loginService:LoginService,
            private router : Router,
            private dataService : DataService) {

    }

    ngOnInit() {
     
     
    }

    onSubmit() {

      this.loginService.getLogin(this.password, this.email)
      .subscribe( data=>{
        if(data.token != null)
        {
          localStorage.setItem('token', data.token);
          this.moveOn();
          
        }

         
        
    } );

    
    }

    moveOn() {
      this.router.navigateByUrl("profile");
    }
}
