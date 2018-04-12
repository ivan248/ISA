import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../../services/profile-service';

@Component({
  selector: 'step-four-component',
  templateUrl: './step-four.component.html',
  styles : [``]
 
})
export class StepFourComponent implements OnInit {

    private userFriends : any[] = [];

    constructor(private profileService : ProfileService) {

    }

    ngOnInit() {
      this.profileService.getFriends().subscribe(data =>
        this.userFriends = data);
    }

}
