import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../../services/data-service';
import { Router } from '@angular/router';
import { Item } from '../../../model/item'


@Component({
  selector: 'edititem-component',
  templateUrl: './edititem-component.component.html'
})

export class EditItemComponent implements OnInit {
    constructor(private dataService: DataService,
                private router: Router){

    }

    private item: Item;

    ngOnInit(){
        console.log("Isas")
        this.dataService.currentEdditedItem.subscribe(item => this.item = item);

        console.log(this.item);
    }


    

}


