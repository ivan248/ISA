import { Component, Input, OnInit } from '@angular/core';
import { ItemService } from '../../../services/item-service';
import { Item } from '../../../model/item';
import { DataService } from '../../../services/data-service';
import { Router } from '@angular/router';
import { UserType } from '../../../model/userType'


@Component({
  selector: 'item-component',
  templateUrl: './item-component.component.html'
})

export class ItemComponent implements OnInit {
    @Input() items : any[];
    
    item : any;
    
    constructor(private itemService: ItemService, private dataService: DataService,
                private router: Router){

    }

   ngOnInit(){
     this.dataService.changePreownedItemListForShow(this.items);
     
   }

    onClickDelete(id: number){
      console.log(id);
      let index=-1;
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].itemID === id) 
          index = i;
      } 
      this.items.splice(index,1);
      console.log(this.items);
      //this.itemService.deleteItem(id);
    }

    onClickEdit(id: number){
     //Dobijam id itema koji treba da editujem i sa sajta vucem ceo taj item
      this.itemService.getItem(id).subscribe(data => {
        this.item = data;
        console.log(this.item);
        this.dataService.changeEdditedItem(this.item);
        this.router.navigateByUrl('/edititem');
      });
      
      
    }

    onClickApprove(id: number){
      var index = this.items.indexOf('itemID',id)
      this.items.splice(index,1);
      console.log(this.items);
      this.itemService.approveItem(id);
     
    }

    onClickSetSelectedItem(id: number){ //klikom na card kazemo da smo izabrali taj item i sa njim dalje radimo
      
        this.itemService.getItem(id).subscribe(data => {
        this.item = data;
        this.dataService.changeSelectedItem(this.item);
        this.router.navigateByUrl('/itemprofile')
      });
      
    }


}


