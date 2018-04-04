import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile-service';

@Component({
  selector: 'profile-component',
  templateUrl: './profile-component.component.html',
  styles: [`body {
    padding: 0px;
    }

    .container {
      width: auto;
      margin-left: 200px;
      margin-right: 200px;
    }​
    .center {
      margin-left: auto;
      margin-right: auto;
      }
      .center.navbar .nav,
      .center.navbar .nav > li {
      float:none;
      display:inline-block;
      *display:inline; /* ie7 fix */
      *zoom:1; /* hasLayout ie7 trigger */
      vertical-align: top;
      }
      .center.navbar-inner {
      text-align:center;
      }
      .center .dropdown-menu {
      text-align: left;
      }
      .navbar-inner {
      margin: 0 auto;
      }`]
})
export class ProfileComponent implements OnInit {
 
    private loggedUser : any = null;

    constructor(private profileService: ProfileService) {

    }

    ngOnInit() {
      console.log(localStorage.getItem('token'));
      this.profileService.getLoggedUser().subscribe(data => this.loggedUser = data);
    }

    onSubmit() {
      this.profileService.getSomething().subscribe(data => console.log(data));
    }

}
