import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'step-one-component',
  templateUrl: './step-one.component.html',
  styles : [``]
 
})
export class StepOneComponent implements OnInit {

    private cinemaSelected : boolean = false;

    constructor(private router : Router) {

    }

    ngOnInit() {

    }

    changeSelected() {
      this.cinemaSelected = !this.cinemaSelected;

      if(!this.cinemaSelected)
        return "btn btn-primary";
      
      return "btn btn-common";
    }

    changeClassTheatre() {
      if(this.cinemaSelected)
      return "btn btn-common";
    
    return "btn btn-primary";

    }

    changeClassCinema() {
      if(!this.cinemaSelected)
      return "btn btn-common";
    
    return "btn btn-primary";

    }

}
