import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'accept-decline-component',
  templateUrl: './accept-decline-component.component.html',
  styles : [``]
 
})

export class AcceptDeclineComponent implements OnInit {

  

    constructor(private router: Router) {

    }

    ngOnInit() {

    
    console.log(this.router.url.substring(12, this.router.url.length));
    }

}
