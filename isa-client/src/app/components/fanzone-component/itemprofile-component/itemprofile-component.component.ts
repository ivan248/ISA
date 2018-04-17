import { Component, OnInit } from '@angular/core';
import { Item } from '../../../model/item'
import { DataService } from '../../../services/data-service'
import { FormControl } from '@angular/forms';
import { BidDTO } from '../../../model/bidDTO';
import { ItemService } from '../../../services/item-service';
import { BidService } from '../../../services/bid-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-itemprofile-component',
  templateUrl: './itemprofile-component.component.html'
})
export class ItemprofileComponent implements OnInit {

 
  item: Item;
  value : number;
  dobarUnos: boolean = false;
  username : any;
  bid : any;

  constructor(private dataService: DataService,private itemService: ItemService,
              private bidService: BidService, private router: Router
  ) {}

  ngOnInit() {
    this.dataService.currentSelectedItem.subscribe(data => {
      this.item=data;
      
      console.log("VERZIJA: " + data.version);
      var token = this.dataService.getDecodedAccessToken(localStorage.getItem('token'));
     console.log(token);
    });

    let user = this.dataService.getDecodedAccessToken(localStorage.getItem('token'));
    console.log(user);
    this.username = user.user;
      
    this.bidService.getBid(this.item).subscribe(data => {
      console.log(data);
      this.bid = data;
      this.value = this.bid.value
    });
    
  }

  

  onSubmit() {
    
    
      this.bid.value = this.value;
      console.log(this.bid);
      console.log(this.value)
      this.bidService.changeBidValue(this.bid).subscribe(data2 => {
        console.log(data2)
        if(data2 == false){
          alert("Error ocurred");
        }
      });
        
    
    
  }

  onClickShowAllBids(id : number) {
    console.log(id);
    this.router.navigateByUrl("showbids");
    
  }



}
