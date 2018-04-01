import { Component, OnInit } from '@angular/core';
import { ItemComponent} from './item-component/item-component.component'
import { FanzoneService } from '../../services/fanzone-service'
import { Response } from '@angular/http'
 

@Component({
  selector: 'fanzone-component',
  templateUrl: './fanzone-component.component.html'
})

export class FanzoneComponent implements OnInit {

  items : any;
  
  constructor( private fanzoneService: FanzoneService) {
    
}

ngOnInit(){
  this.fanzoneService.getApprovedItems()
  .subscribe(
    data=> 
    {this.items = data;
      
      console.log(data);
    }
  );
}

}
