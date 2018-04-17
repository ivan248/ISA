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
    'FAZONE_ADMIN',
    'SYSTEM_ADMIN'
  ];
  roleToAdd: Array<any>;
  users : any;

  ngOnInit() {
    this.profileService.getAllUsers().subscribe(data => {
      this.users = data;
      console.log(data);
      this.roleToAdd = new Array<any>(this.users.length);
      console.log(this.roleToAdd);
    })
    
  }

  onClickPromote(username: any,index : number){
    console.log(username + " " + index);
    let user = this.users.filter(user => user.username == username )[0];
    
    console.log(this.roles[index]);
    this.profileService.addRole(user, this.roles[index]).subscribe(data =>{
      console.log(data);
    });
  }

}
