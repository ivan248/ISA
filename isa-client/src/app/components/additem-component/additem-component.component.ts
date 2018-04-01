import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

 

@Component({
  selector: 'additem-component',
  templateUrl: './additem-component.component.html'
})

export class AdditemComponent implements OnInit {

item = {
  name : "",
  description : "",
  currentBid : 0,
  endDate : "",
  image : ""
};
  
  constructor() {
    
}

ngOnInit(){

}

onSubmit(form: NgForm){
  console.log(this.item);
}

}
