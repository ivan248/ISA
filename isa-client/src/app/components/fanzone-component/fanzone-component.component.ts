import { Component, OnInit } from '@angular/core';
import { ItemComponent} from './item-component/item-component.component'
import { FanzoneService } from '../../services/fanzone-service'
import { Response } from '@angular/http'
import { Router } from '@angular/router'
import { DataService } from '../../services/data-service';

@Component({
  selector: 'fanzone-component',
  templateUrl: './fanzone-component.component.html'
})

export class FanzoneComponent implements OnInit {

  approveditems : any;
  

  constructor( private fanzoneService: FanzoneService, private router: Router,
                private dataService: DataService
    ) {
    
}

ngOnInit(){
  this.fanzoneService.getApprovedItems()
  .subscribe(
    data=> 
    {this.approveditems = data;
      this.dataService.changeItemListForShow(this.approveditems);
      console.log(data);
    }
  );
}


onClickAddNewItem() {
  this.router.navigateByUrl('/addnewitem');
}

onClickPending(){
  this.router.navigateByUrl('/pending');
}

onClickMyFanzone(){
  this.router.navigateByUrl('/myfanzone');
}


}
