import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data-service';
import { CinemasService } from '../../../services/cinemas-service.service';
import { MovieReservation } from '../../../model/movieReservation';

@Component({
  selector: 'step-three-component',
  templateUrl: './step-three.component.html',
  styles : [``]
 
})
export class StepThreeComponent implements OnInit {


    private currentMovie : MovieReservation;
    private currentProjection : any;

    @Output() selectedSeats = new EventEmitter<any>();;

    constructor(private dataService: DataService,
    private cinemaService: CinemasService) {

    }

    ngOnInit() {
      this.dataService.currentMovieReservation
      .subscribe(data => this.currentMovie = data);

      this.cinemaService.getProjectionById(this.currentMovie.projectionId)
      .subscribe(data => this.currentProjection = data);
    }

    onChangeSelectedSeats( array : any) {
      console.log(array);
      this.selectedSeats.emit(array);

    }



}
