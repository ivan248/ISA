import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data-service';


@Component({
  selector: 'step-five-component',
  templateUrl: './step-five.component.html',
  styles : [``]
 
})

export class StepFiveComponent implements OnInit {

    private movieReservation : any;

    constructor(private dataService : DataService) {

    }

    ngOnInit() {

      this.dataService.currentMovieReservation
      .subscribe(data => this.movieReservation = data);

    }

}
