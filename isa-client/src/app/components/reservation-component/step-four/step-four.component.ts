import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../../services/profile-service';
import { TheatresService } from '../../../services/theatres-service.service';
import { MovieReservation } from '../../../model/movieReservation';
import { DataService } from '../../../services/data-service';

@Component({
  selector: 'step-four-component',
  templateUrl: './step-four.component.html',
  styles : [``]
 
})
export class StepFourComponent implements OnInit {

    private userFriends : any[] = [];
    @Input() selectedSeats;
    @Input() cinemaSelected;
    @Output() invitedFriendsArray = new EventEmitter<any>();

    private movieReservation : MovieReservation;

    private friendsInvited : number = 1;
    private disableInvites : boolean = false;
    private invitedFriends : any[] = [];

    constructor(private profileService: ProfileService,
      private theatresService: TheatresService,
      private dataService : DataService) {

    }

    ngOnInit() {
      this.profileService.getFriends().subscribe(data =>
        this.userFriends = data);

      if(this.friendsInvited === this.selectedSeats.length)
        this.disableInvites = true;


      this.dataService.currentMovieReservation
        .subscribe(data => this.movieReservation = data);
    }

    inviteFriend(friendId : any) {

      this.movieReservation.seatsTaken = [];
      this.movieReservation.seatsTaken.push(this.selectedSeats[this.friendsInvited]);

      this.friendsInvited++;
      this.invitedFriends.push(friendId);

      console.log("invited firends 53 : + " + this.invitedFriends);
      this.invitedFriendsArray.emit(this.invitedFriends);

      if(this.friendsInvited === this.selectedSeats.length)
        this.disableInvites = true;
      
      if(!this.cinemaSelected)
      {
        
      }
      else
      {
       
      }
        

    }

    inviteButtonClass(id : any) {

      if(this.invitedFriends.includes(id))
        return "invisible";

      return "btn btn-primary";
    }

}
