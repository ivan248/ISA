import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile-service';

@Component({
  selector: 'app-allusers-component',
  templateUrl: './allusers-component.component.html'
})
export class AllusersComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  roles : Array<string> = [
    'ADMIN',
    'FANZONE_ADMIN',
    'SYSTEM_ADMIN'
  ];
  
  users : any;
  returnedUser : any;

  ngOnInit() {
    this.profileService.getAllUsers().subscribe(data => {
      this.users = data;
    })
    
  }

  onClickPromote(username: any,index : number){
    console.log(username + " " + index);
    let user = this.users.filter(user => user.username == username )[0];
    
    console.log(this.roles[index]);
    this.profileService.addRole(user, this.roles[index]).subscribe(data =>{
      console.log(data);
      if (data == null){
        console.log("User already has that role");
      } else {
        this.returnedUser = data;
        console.log(this.returnedUser);
        
        var foundIndex = this.users.findIndex(user => user.username == this.returnedUser.username);
        console.log(foundIndex)
        console.log(this.users[foundIndex])
        this.users[foundIndex] = this.returnedUser;
        console.log("posle")
        console.log(this.users)
      }
      
      
    });
  }

}
