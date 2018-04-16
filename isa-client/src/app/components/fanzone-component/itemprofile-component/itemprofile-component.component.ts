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

  constructor(private dataService: DataService,private itemService: ItemService,
              private bidService: BidService, private router: Router
  ) {}

  ngOnInit() {
    this.dataService.currentSelectedItem.subscribe(data => {
      this.item=data;
      this.value = this.item.currentBid;
      console.log("VERZIJA: " + data.version);
      var token = this.dataService.getDecodedAccessToken(localStorage.getItem('token'));
     console.log(token);
    });
    
  }

  

  onSubmit() {
    
    if (this.value <= this.item.currentBid){
      alert("Your bid must be higher than current");
    } else {
      
      //this.bidService.sendNewBid(bid).subscribe(data => console.log(data));
      this.itemService.changeCurrentBid(this.value,this.item,this.item.version).subscribe(data =>{
        let bid = new BidDTO(this.item, this.value );
        
        if(data != false) {
          console.log("Usao u ne false")
          this.bidService.sendNewBid(bid).subscribe(data2 => console.log(data2));
        }
      })
      this.item.currentBid = this.value;
    }
  }

  onClickShowAllBids(id : number) {
    console.log(id);
    this.router.navigateByUrl("showbids");
    
  }



}
