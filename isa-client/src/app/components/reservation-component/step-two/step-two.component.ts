import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data-service';
import { MovieReservation } from '../../../model/movieReservation';

@Component({
  selector: 'step-two-component',
  templateUrl: './step-two.component.html',
  styles : [``]
 
})
export class StepTwoComponent implements OnInit {


    @Input() moviesArray : any;
     
    private projectionsArray : any[] = [];
    private projectionName : String;
    private projectionDate : Date;
    private projectionPlace : String;
    private projectionTime : String;
    private projectionId : number;


    constructor(private dataService : DataService) {

    }

    ngOnInit() {

      
    }

    onChangeProjection(projectionValue) {
      for(var i:number=0; i<this.moviesArray.length; i++)
      {
        if(this.moviesArray[i].name === projectionValue)
        {

          this.projectionsArray = this.moviesArray[i].projekcije;

          // for(var j:number=0; j<this.moviesArray[i].projekcije.length; j++)
          // {
          //   this.datesArray.push(this.moviesArray[i].projekcije[j].date);
          // }

          break;
        }
      }

      this.projectionName = projectionValue;

    }

    onChangeDate(projectionDate) {
      this.projectionDate = projectionDate;
    }

    onChangePlace(projectionPlace) {
      this.projectionPlace = projectionPlace;
    }


    onChangeTime(projectionTime) {
      this.projectionTime = projectionTime;

      for(var i:number=0; i<this.projectionsArray.length; i++)
      {

        if(this.projectionsArray[i].date === this.projectionDate
        && this.projectionsArray[i].time === this.projectionTime
        && this.projectionsArray[i].place === this.projectionPlace)
        {
          this.projectionId = this.projectionsArray[i].id;
          break;
        
        }
      }

      this.dataService.changeMovieReservation(
        new MovieReservation(this.projectionId,
          this.projectionName,
        this.projectionDate,
      this.projectionTime,
    this.projectionPlace)
      );
    }




}
