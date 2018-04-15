import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data-service';
import { NewItemService } from '../../../services/newitem-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newitemprofile-component',
  templateUrl: './newitemprofile-component.component.html'
})
export class NewitemprofileComponent implements OnInit {

  item: any;

  constructor(private dataService: DataService, private newItemService: NewItemService, private router : Router) { }

  ngOnInit() {
    this.dataService.currentSelectedNewItem.subscribe(data => {
      this.item  = data;
      
    });
  }

  onClickReserve(id: number) {
    this.newItemService.reserveItem(id).subscribe(data => console.log(data));
    
    this.router.navigateByUrl('/fanzone');
  }

}
