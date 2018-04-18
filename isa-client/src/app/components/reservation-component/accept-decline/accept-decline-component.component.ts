import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectionUserTicketId } from '../../../model/ProjectionUserTicketId';
import { HomeService } from '../../../services/home-service.service';
import { ProfileService } from '../../../services/profile-service';


@Component({
  selector: 'accept-decline-component',
  templateUrl: './accept-decline-component.component.html',
  styles : [``]
 
})

export class AcceptDeclineComponent implements OnInit {

    private projectionId : number = 0;
    private userId : number = 0;
    private ticketId : number = 0;

    private projectionUserTicketId : ProjectionUserTicketId;

    constructor(private activatedRoute: ActivatedRoute,
                private profileService: ProfileService) {

      this.activatedRoute.queryParams.subscribe(params => {
        this.projectionId = params['projection_id'];
        this.userId = params['user_id'];
        this.ticketId = params['ticket_id'];
    });

    }

    ngOnInit() {

    
    
    }

    acceptInvitation() {

      this.projectionUserTicketId =
       new ProjectionUserTicketId(this.projectionId, this.userId, this.ticketId);

      this.profileService.acceptORdeclineInvitation(this.projectionUserTicketId, "accept").subscribe(data =>
      console.log(data));


    }

    declineInvitation() {

      this.projectionUserTicketId =
      new ProjectionUserTicketId(this.projectionId, this.userId, this.ticketId);

      this.profileService.acceptORdeclineInvitation(this.projectionUserTicketId, "decline").subscribe(data =>
        console.log(data));

    }

}
