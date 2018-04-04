import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../../services/data-service';
import { Router } from '@angular/router';
import { Item } from '../../../model/item'

import { ItemService } from '../../../services/item-service';


@Component({
  selector: 'edititem-component',
  templateUrl: './edititem-component.component.html'
})

export class EditItemComponent implements OnInit {
    constructor(private dataService: DataService,
                private router: Router,
                private itemSerice: ItemService){

    }

    private item: Item;
    private itemList : Array<Item>;

    ngOnInit(){
        //console.log("Isas")
        this.dataService.currentEdditedItem.subscribe(item => this.item = item);
        this.dataService.currentItemListForShow.subscribe(itemList => this.itemList = itemList);
        //console.log(this.item);
    }

    onSubmit(){
        console.log("ZNACI USAO");
        console.log(this.itemList);
        
        let updateItem = this.itemList.find(i => i.itemID == this.item.itemID);
        let index = this.itemList.indexOf(updateItem);

        this.itemList[index] = this.item;
         this.itemSerice.sendEdditedItem(this.item)
          .subscribe();
         this.router.navigateByUrl('/fanzone');
      }
    

}


