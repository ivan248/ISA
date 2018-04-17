import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../../services/data-service';
import { MovieReservation } from '../../../model/movieReservation';


@Component({
  selector: 'step-five-component',
  templateUrl: './step-five.component.html',
  styleUrls : [`step-five.component.css`]
 
})

export class StepFiveComponent implements OnInit {

    private movieReservation : MovieReservation;

    @Input() selectedSeats : any[];
    @Output() movieReservationOutput =  new EventEmitter<any>();

    private selectedSeatsString : string = "[";

    constructor(private dataService : DataService) {

    }

    ngOnInit() {

      this.dataService.currentMovieReservation
      .subscribe(data => this.movieReservation = data);

      console.log(this.selectedSeats + " iz step five");

      for(var i:number=0; i<this.selectedSeats.length; i++)
      {
        if(i!=this.selectedSeats.length-1)
          this.selectedSeatsString += this.selectedSeats[i] + ", ";
        else
          this.selectedSeatsString += this.selectedSeats[i] + "]";
      }

      this.movieReservation.seatsTaken = this.selectedSeats;
      this.movieReservationOutput.emit(this.movieReservation);
      
    }

}
