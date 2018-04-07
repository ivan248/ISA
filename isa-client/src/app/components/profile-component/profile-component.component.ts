import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile-service';
import { User } from '../../model/dto/userDTO';

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
      }
      
      
      body{
        background: #DAE3E7;
      }
      
      .row{
        margin-top: 40px;
      }
      
      
      html,body,h1,h2,h3,h4,h5,h6 {font-family: "Roboto", sans-serif}
      div.card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1);
      }
      
      .header {
        padding: 10px 0;
        background: #f5f5f5;
        border-top: 3px solid #3AAA64;
      }
      
      .list-group {
          list-style: disc inside;
      
      }
      
      .list-group-item {
          display: list-item;
      }
      
       .find-more{
         text-align: right;
       }
      
      
      .label-theme{
        background: #3AAA64;
        font-size: 14px;
        padding: .3em .7em .3em;
        color: #fff;
        border-radius: .25em;
      }
      
      .label a{
        color: inherit;
      }
      `]
})
export class ProfileComponent implements OnInit {
 
    private loggedUser : any;
    private userFriends : any[] = [];
    private allUsers : any [] = [];
    private userFriendRequests : any [] = [];
    private filteredArray : any[] = [];

    private editClicked : boolean = true;
    private searchButtonClicked : boolean = true;

    private firstName : string;
    private lastName : string;
    private username : string;
    private phoneNumber : number;
    private city : string;

    private searchName : string;
    private searchLastName : string;

    constructor(private profileService: ProfileService) {

    }

    ngOnInit() {
      this.profileService.getLoggedUser().subscribe(data =>{
        this.loggedUser = data;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.username = data.username;
        this.phoneNumber = data.phoneNumber;
        this.city = data.city;
      } );

      this.profileService.getFriends().subscribe(data =>
      this.userFriends = data);

      this.profileService.getAllUsers().subscribe(data =>
        this.allUsers = data);

      this.profileService.getFriendRequests().subscribe(data =>
        {this.userFriendRequests = data;
          console.log(data);
        });
      
    }

    editButtonClicked() {
      this.editClicked = !this.editClicked;
      this.firstName = this.loggedUser.firstName;
      this.lastName = this.loggedUser.lastName;
      this.username = this.loggedUser.username;
      this.phoneNumber = this.loggedUser.phoneNumber;
      this.city = this.loggedUser.city;
    }

    confirmEdit() {
      console.log();
      this.editClicked = !this.editClicked;

      let user = new User(
      this.firstName,
      this.lastName,
      this.username,
      this.phoneNumber,
      this.city);

      this.profileService.editUser(user).subscribe(data => this.loggedUser = data);
    }

    removeFriend(i : number) {
      this.profileService.removeFriend(i.toString()).subscribe(data =>
        this.userFriends = data);

    }

    getAllUsers() {
      this.profileService.getAllUsers().subscribe(data =>
        this.allUsers = data);

      this.searchButtonClicked = false;
      this.filteredArray = [];
    }

    searchClicked() {

     this.filteredArray = [];
      
      if(this.searchLastName !== "" && this.searchName !== "")
      {
        this.allUsers.forEach((user,index) => {
            if(user.firstName == this.searchName && user.lastName == this.searchLastName)
            {
              if(this.filteredArray
                .find(x => (x.username == user.username))
                 === undefined) {

                  this.filteredArray.push(user);
                }
            }
        });
      }
      
      if((this.searchLastName === undefined || this.searchLastName === "") && this.searchName !== "")
      {
        this.allUsers.forEach((user,index) => {
          if(user.firstName == this.searchName)
          {
            if(this.filteredArray
              .find(x => (x.username == user.username))
               === undefined) {

                this.filteredArray.push(user);
              }       
          }
      });
      }

      if(this.searchLastName !== "" && (this.searchName === undefined || this.searchName === ""))
      {
        this.allUsers.forEach((user,index) => {
          if(user.lastName == this.searchLastName)
          {
            if(this.filteredArray
              .find(x => (x.username == user.username))
               === undefined) {

                this.filteredArray.push(user);
              } 
          }
      });
      }
      
      this.searchButtonClicked = true;

    }

    addFriend(friendUsername : string) {
      this.profileService.sendFriendRequest(friendUsername)
      .subscribe(data => console.log(data));
    }

    acceptFriend(friendId : number) {
      this.profileService.acceptFriend(friendId.toString())
      .subscribe(data => console.log(data));
    }

    declineFriend(friendId : number) {
      this.profileService.declineFriend(friendId.toString())
      .subscribe(data => console.log(data));
    }
 }
