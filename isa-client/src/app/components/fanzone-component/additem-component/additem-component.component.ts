import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FanzoneService } from '../../../services/fanzone-service';
import { Router } from '@angular/router';

 

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
    
    constructor(private fanzone: FanzoneService, private router:Router) {
      
  }

  ngOnInit(){

  }

  onSubmit(){
    this.fanzone.sendNewItem(this.item)
      .subscribe();
    this.router.navigateByUrl('/fanzone');
  }




}
