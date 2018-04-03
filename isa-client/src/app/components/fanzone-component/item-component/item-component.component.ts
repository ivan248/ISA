import { Component, Input } from '@angular/core';
import { ItemService } from '../../../services/item-service';
import { Item } from '../../../model/item';
import { DataService } from '../../../services/data-service';
import { Router } from '@angular/router';


@Component({
  selector: 'item-component',
  templateUrl: './item-component.component.html'
})

export class ItemComponent {
    @Input() items : any[];
    
    item : any;
    constructor(private itemService: ItemService, private dataService: DataService,
                private router: Router){

    }

    onClickDelete(id: number){
      var index = this.items.indexOf('itemID',id)
      this.items.splice(index,1);
      console.log(this.items);
      this.itemService.deleteItem(id);
    }

    onClickEdit(id: number){
     //Dobijam id itema koji treba da editujem i sa sajta vucem ceo taj item
      this.itemService.getItem(id).subscribe(data => {
        this.item = data;
        //console.log(this.item);
        this.dataService.changeEdditedItem(this.item);
        this.router.navigateByUrl('/edititem');
      });
      
      
    }


}


