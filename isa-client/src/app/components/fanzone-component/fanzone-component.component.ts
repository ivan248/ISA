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
  newitems : any;
  preowned : boolean = true;
  

  constructor( private fanzoneService: FanzoneService, private router: Router,
                private dataService: DataService
    ) {
    
}

ngOnInit(){
  
  this.dataService.currentTypeOfItemForShow.subscribe(data => {
    if(data == null){
      console.log("Usao u null");
      this.dataService.changeTypeOfItemForShow(true);
    } else {
      this.preowned = data;
    }
  })
    

  this.fanzoneService.getApprovedItems()
  .subscribe(
    data=> 
    {this.approveditems = data;
      this.dataService.changePreownedItemListForShow(this.approveditems);
      
    }
  );

  this.fanzoneService.getNewItems()
    .subscribe(
    data=> 
    {this.newitems = data;
      //this.dataService.changeItemListForShow(this.newitems);
      
    }
  );

  

  

}


onClickAddNewItem() {
  this.router.navigateByUrl('/additem');
}

onClickAddNewNewItem() {
  this.router.navigateByUrl('/addnewitem');
}

onClickPending(){
  //Poslati zahtev da vidis da li je fanzone admin ili system admin, ako jeste moze, ako ne ne moze
  this.fanzoneService.checkIfOk().subscribe(data => {
    console.log(data);
    this.router.navigateByUrl('/pending');
  })

  
}

onClickMyFanzone(){
  this.router.navigateByUrl('/myfanzone');
}

onClickPreOwnedItems() {
  if(!this.preowned) {
    this.preowned = true;
    this.dataService.changeTypeOfItemForShow(this.preowned);
    
  }
  

}

onClickNewItems() {
  if(this.preowned){
    this.preowned = false
    this.dataService.changeTypeOfItemForShow(this.preowned);
    console.log(this.newitems);
  }
  
  
}


}
