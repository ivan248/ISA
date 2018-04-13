import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile-service';
import { User } from '../../model/dto/userDTO';
import { Location } from '@angular/common';

@Component({
  selector: 'profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: [`profile-component.component.css`]
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

    constructor(private profileService: ProfileService,
      private location: Location) {

    }

    ngOnInit() {

      

      this.profileService.getLoggedUser().subscribe( data =>{
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

      alert("Friend request sent!");
    }

    acceptFriend(friendId : number) {
      this.profileService.acceptFriend(friendId.toString())
      .subscribe(data =>{
         this.userFriends = data;
         this.userFriendRequests = [];

         this.profileService.getFriendRequests().subscribe(data =>
           {this.userFriendRequests = data;
             console.log(data);
           });
          
        });



      alert("Friend request accepted!");
    }

    declineFriend(friendId : number) {
      this.profileService.declineFriend(friendId.toString())
      .subscribe(data => console.log(data));

      this.userFriendRequests = [];

      this.profileService.getFriendRequests().subscribe(data =>
        {this.userFriendRequests = data;
          console.log(data);
         
        });

      alert("Friend request denied!");
    }
 }
