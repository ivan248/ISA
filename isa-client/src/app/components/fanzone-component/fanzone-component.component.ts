import { Component, OnInit } from '@angular/core';
import { ItemComponent} from './item-component/item-component.component'
import { FanzoneService } from '../../services/fanzone-service'
import { Response } from '@angular/http'
import { Router } from '@angular/router'

@Component({
  selector: 'fanzone-component',
  templateUrl: './fanzone-component.component.html'
})

export class FanzoneComponent implements OnInit {

  approveditems : any;
  
  constructor( private fanzoneService: FanzoneService, private router: Router) {
    
}

ngOnInit(){
  this.fanzoneService.getApprovedItems()
  .subscribe(
    data=> 
    {this.approveditems = data;
      
      console.log(data);
    }
  );
}


onClickAddNewItem() {
  this.router.navigateByUrl('/addnewitem');
}


}
