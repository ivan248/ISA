import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'step-one-component',
  templateUrl: './step-one.component.html',
  styles : [``]
 
})
export class StepOneComponent implements OnInit {

    private cinemaSelected : boolean = false;

    @Input() cinemasArray : any;
    @Input() theatresArray : any;
    @Output() onTheatreChanged = new EventEmitter<any>();
    @Output() onCinemaChanged = new EventEmitter<any>();
    @Output() onCinemaSelectedChanged = new EventEmitter<any>();

    constructor(private router : Router) {

    }

    ngOnInit() {
      
      
    }

    onChangeTheatre(theatreValue) {
      this.onTheatreChanged.emit(theatreValue);
    }

    onChangeCinema(cinemaValue) {
      this.onCinemaChanged.emit(cinemaValue);
    }

    changeSelected() {
      this.cinemaSelected = !this.cinemaSelected;
      this.onCinemaSelectedChanged.emit(this.cinemaSelected);

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
