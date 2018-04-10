import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data-service';

@Component({
  selector: 'app-newitemprofile-component',
  templateUrl: './newitemprofile-component.component.html'
})
export class NewitemprofileComponent implements OnInit {

  item: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentSelectedNewItem.subscribe(data => {
      this.item  = data;
      
    });
  }

}
