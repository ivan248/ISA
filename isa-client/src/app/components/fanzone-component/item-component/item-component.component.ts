import { Component, Input } from '@angular/core';
import { ItemService } from '../../../services/item-service';


@Component({
  selector: 'item-component',
  templateUrl: './item-component.component.html'
})

export class ItemComponent {
    @Input() items : any[];

    constructor(private itemService: ItemService){

    }

    onClickDelete(id: number){
      var index = this.items.indexOf('itemID',id)
      this.items.splice(index,1);
      console.log(this.items);
      this.itemService.deleteItem(id);
    }

    onClickEdit(id: number){
      console.log("usaos");
      var item = this.items.filter(x => x.itemID == id)[0];
      console.log(item);
      
    }


}


