import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'accept-decline-component',
  templateUrl: './accept-decline-component.component.html',
  styles : [``]
 
})

export class AcceptDeclineComponent implements OnInit {

  

    constructor(private activatedRoute: ActivatedRoute) {
      this.activatedRoute.queryParams.subscribe(params => {
        let projectionId = params['projection_id'];
        let userId = params['user_id'];
        let ticketId = params['ticket_id'];

        console.log(projectionId); // Print the parameter to the console. 
        console.log(userId); // Print the parameter to the console. 
        console.log(ticketId); // Print the parameter to the console. 

    });
    }

    ngOnInit() {

    
    
    }

}
