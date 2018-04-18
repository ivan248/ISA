import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CinemasService } from '../../../services/cinemas-service.service';
import { TheatresService } from '../../../services/theatres-service.service';

@Component({
  selector: 'step-one-component',
  templateUrl: './step-one.component.html',
  styles : [``]
 
})
export class StepOneComponent implements OnInit {

    private cinemaSelected : boolean = false;
    private searchTheatreClicked : boolean = true;
    private searchCinemaClicked : boolean = true;

    private theatresSearchArray : any;
    private cinemasSearchArray : any;
    private searchTheatreInput : string = "";
    private searchCinemaInput : string = "";
    

    @Input() cinemasArray : any;
    @Input() theatresArray : any;
    @Output() onTheatreChanged = new EventEmitter<any>();
    @Output() onCinemaChanged = new EventEmitter<any>();
    @Output() onCinemaSelectedChanged = new EventEmitter<any>();

    constructor(private cinemaService: CinemasService,
    private theatreService: TheatresService) {

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
    
    return "btn btn-dark";

    }

    changeClassCinema() {
      if(!this.cinemaSelected)
      return "btn btn-common";
    
    return "btn btn-dark";

    }

    searchTheatre() {
      this.searchTheatreClicked = false;

      this.theatreService.searchTheatres(this.searchTheatreInput)
      .subscribe(data => this.theatresSearchArray = data);

    }

    searchCinema() {

      this.searchCinemaClicked = false;

      this.cinemaService.searchCinemas(this.searchCinemaInput)
      .subscribe(data => this.cinemasSearchArray = data);
    }

}
