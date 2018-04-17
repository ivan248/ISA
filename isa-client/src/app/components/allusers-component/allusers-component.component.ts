import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile-service';

@Component({
  selector: 'app-allusers-component',
  templateUrl: './allusers-component.component.html'
})
export class AllusersComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  users : any;

  ngOnInit() {
    this.profileService.getAllUsers().subscribe(data => {
      this.users = data;
      console.log(data);
    })
  }

}
