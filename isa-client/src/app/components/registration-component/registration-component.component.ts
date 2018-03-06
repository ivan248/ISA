import { Component, OnInit } from '@angular/core';

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
 
    constructor() {

    }

    private email : string = "fsaf";
    ngOnInit() {

    }

    onClick() {
    
    }
}
