import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../../services/profile-service';
import { TheatresService } from '../../../services/theatres-service.service';

@Component({
  selector: 'step-four-component',
  templateUrl: './step-four.component.html',
  styles : [``]
 
})
export class StepFourComponent implements OnInit {

    private userFriends : any[] = [];
    @Input() selectedSeats;

    private friendsInvited : number = 1;
    private disableInvites : boolean = false;
    private invitedFriends : any[] = [];

    constructor(private profileService: ProfileService,
      private theatresService: TheatresService) {

    }

    ngOnInit() {
      this.profileService.getFriends().subscribe(data =>
        this.userFriends = data);

      if(this.friendsInvited === this.selectedSeats.length)
        this.disableInvites = true;
    }

    inviteFriend(friendId : any) {

      this.friendsInvited++;
      this.invitedFriends.push(friendId);

      if(this.friendsInvited === this.selectedSeats.length)
        this.disableInvites = true;

      //this.theatresService.

    }

    inviteButtonClass(id : any) {

      if(this.invitedFriends.includes(id))
        return "invisible";

      return "btn btn-primary";
    }

}
