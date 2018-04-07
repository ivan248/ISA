import { Component, Input, OnInit } from '@angular/core';
import { ItemService } from '../../../services/item-service';
import { Item } from '../../../model/item';
import { DataService } from '../../../services/data-service';
import { Router } from '@angular/router';
import { NewItemService } from '../../../services/newitem-service';

@Component({
  selector: 'newitem-component',
  templateUrl: './newitem-component.component.html'
})
export class NewitemComponent implements OnInit {

  @Input() items : any[];
    
    item : any;
    constructor(private newItemService: NewItemService, private dataService: DataService,
                private router: Router){

    }

   ngOnInit(){
     
   }

    onClickDelete(id: number){
      console.log(this.items);
      // var index = this.items.indexOf('itemID',id)
      
      // this.items.splice(index,1);
      alert("Cascade!")
      //this.newItemService.deleteItem(id);
    }

    onClickEdit(id: number){
     //Dobijam id itema koji treba da editujem i sa sajta vucem ceo taj item
     console.log(id);
        this.newItemService.getItem(id).subscribe(data => {
        
        this.item = data;
        
        this.dataService.changeSelectedNewItem(this.item);
        this.router.navigateByUrl('/editnewitem');
      });
    }
      
    // }

    // onClickSetSelectedItem(id: number){ //klikom na card kazemo da smo izabrali taj item i sa njim dalje radimo
      
    //     this.newItemService.getItem(id).subscribe(data => {
    //     this.item = data;
    //     this.dataService.changeSelectedItem(this.item);
    //     this.router.navigateByUrl('/itemprofile')
    //   });
      
    // }


}
