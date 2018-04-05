import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myfanzone-component',
  templateUrl: './myfanzone-component.component.html'
})
export class MyfanzoneComponent implements OnInit {

  constructor() { }

  current: boolean = true;

  ngOnInit() {
  }

  onClickMyBids(){
    console.log("Promeno tab");
  }

  onClickMyItems() {
    console.log("Promenio tab2");
  }

  onClickBoughtItems(){
    console.log("Promenio tab3");
  }
}
