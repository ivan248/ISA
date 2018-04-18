import { Component, OnInit } from '@angular/core';
import { BidService } from '../../../services/bid-service';

@Component({
  selector: 'app-myfanzone-component',
  templateUrl: './myfanzone-component.component.html'
})
export class MyfanzoneComponent implements OnInit {

  constructor(private bidService: BidService) { }

  current: boolean = true;
  bidList : any;

  ngOnInit() {
    this.bidService.getAllByUser().subscribe(data => {
      this.bidList = data;
    })
  }

  onClickMyBids(){
    console.log("Promeno tab");
  }

  onClickMyItems() {
    console.log("Promenio tab2");
  }

  onClickBoughtItems(){
    console.log("Promenio tab3");
  }
}
