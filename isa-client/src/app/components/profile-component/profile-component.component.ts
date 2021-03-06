import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile-service';
import { User } from '../../model/dto/userDTO';
import { Location } from '@angular/common';
import { NotificationService } from '../../services/notification-service';
import * as jwt_decode from "jwt-decode";
import { CinemasService } from '../../services/cinemas-service.service';
import { TheatresService } from '../../services/theatres-service.service';


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
    private projectionsReserved : any[] = [];

    private editClicked : boolean = true;
    private searchButtonClicked : boolean = true;
    private adminLoggedFirstTime : boolean = false;
    private canChangePassword : boolean = true;

    private firstName : string;
    private lastName : string;
    private username : string;
    private phoneNumber : number;
    private city : string;
    
    private cinemasArray : any;
    private theatresArray : any;

    private searchName : string = "";
    private searchLastName : string = "";

    private notifications: any;

    private selectedRateAmb: any;
    private selectedRateMov: any;

    constructor(private profileService: ProfileService,
      private location: Location,
      private notificationService : NotificationService,
      private theatresService: TheatresService,
      private cinemasService: CinemasService) {

    }

    ngOnInit() {

      //TODO: Uzmi sve notifikacije sa servera

      this.profileService.getCinemasSorted().subscribe(data=>
      this.cinemasArray=data);

      this.profileService.getLoggedUser().subscribe( data =>{
        this.loggedUser = data;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.username = data.username;
        this.phoneNumber = data.phoneNumber;
        this.city = data.city;
        
        console.log("Roles : " + data.roles);

        for(var i:number=0; i<data.roles.length; i++)
        { 
          console.log("Roles : " + data.roles[i].role);
          
          if( (data.roles[i].role === "ADMIN" || data.roles[i].role=="FANZONE_ADMIN") && data.firstTimeLogged)
          {
            this.adminLoggedFirstTime = true;
          }

          if((data.roles[i].role === "ADMIN" || data.roles[i].role=="FANZONE_ADMIN"))
          {
            this.canChangePassword = !this.canChangePassword;
          }

        }
        
      } );

      this.profileService.getFriends().subscribe(data =>
      this.userFriends = data);

      this.profileService.getAllUsers().subscribe(data =>
        this.allUsers = data);

      this.profileService.getFriendRequests().subscribe(data =>
        {this.userFriendRequests = data;
         
        });

      this.notificationService.getAllNotifications().subscribe(data =>{
        this.notifications = data;
      });

      this.profileService.getReservations().subscribe(data =>
        {this.projectionsReserved = data;
        console.log(this.projectionsReserved);});

      this.theatresService.getTheatres().subscribe(data =>
        this.theatresArray = data);

      this.cinemasService.getCinemas().subscribe(data =>
        this.cinemasArray = data);
      
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

      this.profileService.searchUsers(this.searchName, this.searchLastName)
      .subscribe(data => this.filteredArray = data);

    //   if(this.searchLastName !== "" && this.searchName !== "")
    //   {
    //     this.allUsers.forEach((user,index) => {
    //         if(user.firstName == this.searchName && user.lastName == this.searchLastName)
    //         {
    //           if(this.filteredArray
    //             .find(x => (x.username == user.username))
    //              === undefined) {

    //               this.filteredArray.push(user);
    //             }
    //         }
    //     });
    //   }
      
    //   if((this.searchLastName === undefined || this.searchLastName === "") && this.searchName !== "")
    //   {
    //     this.allUsers.forEach((user,index) => {
    //       if(user.firstName == this.searchName)
    //       {
    //         if(this.filteredArray
    //           .find(x => (x.username == user.username))
    //            === undefined) {

    //             this.filteredArray.push(user);
    //           }       
    //       }
    //   });
    //   }

    //   if(this.searchLastName !== "" && (this.searchName === undefined || this.searchName === ""))
    //   {
    //     this.allUsers.forEach((user,index) => {
    //       if(user.lastName == this.searchLastName)
    //       {
    //         if(this.filteredArray
    //           .find(x => (x.username == user.username))
    //            === undefined) {

    //             this.filteredArray.push(user);
    //           } 
    //       }
    //   });
    //   }
      


      this.searchButtonClicked = true;

    }

    addFriend(friendUsername : string) {

      this.filteredArray = [];

      this.profileService.sendFriendRequest(friendUsername)
      .subscribe(data => {
        this.allUsers = data;
    });

      alert("Friend request sent!");
    }

    acceptFriend(friendId : number) {
      this.profileService.acceptFriend(friendId.toString())
      .subscribe(data =>{
         this.userFriends = data;
         this.userFriendRequests = [];

         this.profileService.getFriendRequests().subscribe(data =>
           {this.userFriendRequests = data;
           });
          
        });



      alert("Friend request accepted!");
    }

    declineFriend(friendId : number) {
      this.profileService.declineFriend(friendId.toString())
      .subscribe(data => {
       
        this.userFriends = data;
        this.userFriendRequests = [];

        this.profileService.getFriendRequests().subscribe(data =>
          {this.userFriendRequests = data;
           
          });
      
      });

      alert("Friend request denied!");
    }

    onClickRead(id : number){
      this.notificationService.readNotification(id).subscribe(data => {
       
      })
    }

    onPasswordChanged(passwordChanged : boolean) {
      if(passwordChanged)
        this.adminLoggedFirstTime = false;
    }

    cancelReservation(id : any, seatNumber : any) {
      console.log(id + "  " + seatNumber);
      this.profileService.cancelProjectionReservation(id, seatNumber)
      .subscribe(data => {this.projectionsReserved = data;
        console.log(data + " ispis iz cancelRes");}
        );
      
        
    }

    onChangeRatePlay(ratevalue, id: any, p: any ){
      console.log(ratevalue);
      console.log("idprojekcije"+id);
      this.profileService.ratePlay(id, ratevalue, p).subscribe();
      this.selectedRateMov.emit(ratevalue);
      
    }

    onChangeRateAmb(ratevalue, id: any, p: any){
      console.log(ratevalue);
      this.profileService.rateAmb(id, ratevalue, p).subscribe();
      this.selectedRateAmb.emit(ratevalue);
    }

    onChangeSortFriends(value:any) {
      if(value==="name")
      {
        this.userFriends = this.userFriends.sort((a, b) => a.friendFirstName.localeCompare(b.friendFirstName))
      }
      else
      {
        this.userFriends = this.userFriends.sort((a, b) => a.friendLastName.localeCompare(b.friendLastName))

      }
    }

    onChangeSortCinemas(value:any) {
      if(value==="name")
      {
        this.cinemasArray = this.cinemasArray.sort((a, b) => a.name.localeCompare(b.name))
      }
      else
      {
        this.cinemasArray = this.cinemasArray.sort((a, b) => a.address.localeCompare(b.address))

      }
    }

    onChangeSortTheatres(value:any) {
      if(value==="name")
      {
        this.theatresArray = this.theatresArray.sort((a, b) => a.name.localeCompare(b.name))
      }
      else
      {
        this.theatresArray = this.theatresArray.sort((a, b) => a.address.localeCompare(b.address))

      }
    }
 }
