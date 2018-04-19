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
    username : any;

    
  constructor(private itemService: ItemService, private dataService: DataService,
                private router: Router){

  }

  ngOnInit(){
    this.dataService.changePreownedItemListForShow(this.items);
    
  
     
   }

    onClickDelete(id: number){
      this.itemService.deleteItem(id).subscribe(data => {
        console.log(id);
        let index=-1;
        for (var i = 0; i < this.items.length; i++) {
          if (this.items[i].itemID === id) 
            index = i;
        } 
        this.items.splice(index,1);
        console.log(this.items);
      });
      
      
    }

    onClickEdit(id: number){
      this.itemService.getItem(id).subscribe(data => {
        this.item = data;
        this.itemService.checkIfOk(this.item).subscribe(data2 => {
            this.dataService.changeEdditedItem(this.item);
            this.router.navigateByUrl('/edititem');
          });
        });
      
      
    }

    onClickApprove(item : Item){
      var index = this.items.indexOf('itemID',item.itemID)
      this.items.splice(index,1);
      console.log(item);
      this.itemService.approveItem(item).subscribe();
     
    }

    onClickSetSelectedItem(id: number){ //klikom na card kazemo da smo izabrali taj item i sa njim dalje radimo
      
        this.itemService.getItem(id).subscribe(data => {
        this.item = data;
        this.dataService.changeSelectedItem(this.item);
        this.router.navigateByUrl('/itemprofile')
      });
      
    }


}


