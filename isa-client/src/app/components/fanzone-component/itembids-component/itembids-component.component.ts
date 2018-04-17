import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data-service';
import { BidService } from '../../../services/bid-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-itembids-component',
  templateUrl: './itembids-component.component.html'
})
export class ItembidsComponent implements OnInit {

  item : any;
  bidList: any;
  constructor(private dataService: DataService,private bidService : BidService, private router:Router) { }

  ngOnInit() {
    this.dataService.currentSelectedItem.subscribe(data => {
      this.item=data;
      this.bidService.getAllByItem(this.item).subscribe(data => {
        this.bidList = data;
        console.log(this.bidList);
      });
    });
  }

  onClickAcceptBid(bid: any){
    console.log("Usao");
    this.bidService.acceptBid(bid).subscribe(data=> {
      console.log(data)
      if (data == false){
        alert("Error ocurred")
      }
    });
    this.router.navigateByUrl("/itemprofile");
  }
  

}
