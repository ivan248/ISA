import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data-service';
import { NewItemService } from '../../../services/newitem-service';
import { Router } from '@angular/router';
import { UserType } from '../../../model/userType';

@Component({
  selector: 'app-newitemprofile-component',
  templateUrl: './newitemprofile-component.component.html'
})
export class NewitemprofileComponent implements OnInit {

  item: any;
  userType : UserType = 0;
  constructor(private dataService: DataService, private newItemService: NewItemService, private router : Router) { }

  ngOnInit() {
    this.dataService.currentSelectedNewItem.subscribe(data => {
      this.item  = data;
      
    });

    var token = this.dataService.getDecodedAccessToken(localStorage.getItem('token'));
    if (token.activity < 2000  ){
      this.userType = 0;
    } else if (token.activity >= 2000 && token.activity < 5000 ){
      this.userType = 1;
    } else if (token.activity >= 5000 && token.activity < 10000) {
      this.userType = 2;
    } else {
      this.userType = 3;
    }
    
    console.log(UserType[this.userType])
  }

  onClickReserve(id: number) {
    this.newItemService.reserveItem(id).subscribe(data => console.log(data));
    
    this.router.navigateByUrl('/fanzone');
  }

}
