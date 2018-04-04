import { Component, OnInit, Input } from '@angular/core';
import { FanzoneService } from '../../../services/fanzone-service';
import { DataService } from '../../../services/data-service';
import { ItemComponent } from '../item-component/item-component.component'


@Component({
  selector: 'app-pendingitem-component',
  templateUrl: './pending-component.component.html'
  
})
export class PendingComponent implements OnInit {

  unapproveditems : any;

  constructor(private fanzoneService: FanzoneService, private dataService : DataService) { }

  
  ngOnInit(){
    this.fanzoneService.getUnApprovedItems()
    .subscribe(
      data=> 
      {this.unapproveditems = data;
        this.dataService.changeItemListForShow(this.unapproveditems);
        console.log(data);
      }
    );
  }

}
