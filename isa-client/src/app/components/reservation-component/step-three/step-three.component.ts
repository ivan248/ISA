import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data-service';
import { CinemasService } from '../../../services/cinemas-service.service';

@Component({
  selector: 'step-three-component',
  templateUrl: './step-three.component.html',
  styles : [``]
 
})
export class StepThreeComponent implements OnInit {


    private currentMovie : any;

    constructor(private dataService: DataService,
    private cinemaService: CinemasService) {

    }

    ngOnInit() {
      this.currentMovie = this.dataService.currentMovieReservation;
      this.cinemaService.getProjectionById(this.currentMovie.id)
      .subscribe(data => console.log(data));
    }

}
