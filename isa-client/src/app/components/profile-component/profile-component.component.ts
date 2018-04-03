import { Component, OnInit } from '@angular/core';

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
 

    constructor() {

    }

    ngOnInit() {
      console.log(localStorage.getItem('token'));
    }

}
