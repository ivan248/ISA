import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'registration-component',
  templateUrl: './registration-component.component.html',
  styles : [` .ng-invalid:not(form)  {
    border-left: 5px solid #a94442; /* red */
  }

  .ng-valid[required], .ng-valid.required  {
    border-left: 5px solid #42A948; /* green */
  }
  `]
})
export class RegistrationComponent implements OnInit {
 
    constructor(private loginService : LoginService,
                private router: Router) {

    }

    private email : string = "fsaf";
    ngOnInit() {

    }

    onClick() {
    
    }

    onSubmit(form : NgForm) {

      console.log(form.value);
      this.loginService.submitRegistration(form.value).subscribe(data => console.log("Poslato"));
      this.router.navigateByUrl('login');

    }
}
