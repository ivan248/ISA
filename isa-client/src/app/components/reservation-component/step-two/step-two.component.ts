import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data-service';
import { MovieReservation } from '../../../model/movieReservation';
import { TheatresService } from '../../../services/theatres-service.service';

@Component({
  selector: 'step-two-component',
  templateUrl: './step-two.component.html',
  styles : [``]
 
})
export class StepTwoComponent implements OnInit {


    @Input() moviesArray : any;
    @Input() playsArray : any;

    @Input() cinemaSelected : any;
     
    private projectionsArray : any[] = [];
    private projectionName : any;
    private projectionDate : Date;
    private projectionPlace : String;
    private projectionTime : String;
    private projectionId : number;
    private projectionPrice : number = 0;

    private datesAvailable : any[] = [];
    private placesAvailable : any[] = [];
    private timesAvailable : any[] = [];


    constructor(private dataService : DataService,
      private theatreService : TheatresService) {

    }

    ngOnInit() {

  
    }

    onChangeProjection(projectionValue) {

      this.projectionName = projectionValue;

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

      

    }

    onChangeDate(projectionDate) {
      this.projectionDate = projectionDate;

      this.placesAvailable = [];

      for(var i:number=0; i<this.projectionsArray.length; i++)
      {
        if(this.projectionsArray[i].date === projectionDate)
        {
          if(!this.placesAvailable.includes(this.projectionsArray[i].place))
              this.placesAvailable.push(this.projectionsArray[i].place);
        }
      }

    }

    onChangePlace(projectionPlace) {
      this.projectionPlace = projectionPlace;

      this.timesAvailable = [];
      this.projectionPrice = 0;

      for(var i:number=0; i<this.projectionsArray.length; i++)
      {
        if(this.projectionsArray[i].date === this.projectionDate &&
            this.projectionsArray[i].place === this.projectionPlace)
        {
          if(!this.placesAvailable.includes(this.projectionsArray[i].time))
              this.timesAvailable.push(this.projectionsArray[i].time);
        }
      }

    }

    onChangePlay(playSelected) {

      this.placesAvailable = [];
      this.datesAvailable = [];
      this.timesAvailable = [];
      this.projectionPrice = 0;



      this.theatreService
      .getProjectionDate(playSelected)
      .subscribe(data =>{
        this.projectionsArray = data;
        this.datesAvailable = [];
        
        
        for(var i:number=0; i<this.projectionsArray.length; i++)
        {
          if(!this.datesAvailable.includes(this.projectionsArray[i].date))
          {
              this.datesAvailable.push(this.projectionsArray[i].date);
          }
        }

      });

      for(var i:number=0; i<this.moviesArray.length; i++)
      {
        console.log(this.moviesArray[i].id);
        if(this.moviesArray[i].id == playSelected)
        {
          console.log(this.moviesArray[i].name);
          this.projectionName = this.moviesArray[i].name;
          console.log(this.projectionName);
        }
      }
    }


    onChangeTime(projectionTime) {
      this.projectionTime = projectionTime;

      for(var i:number=0; i<this.projectionsArray.length; i++)
      {
        if(this.projectionsArray[i].date === this.projectionDate &&
            this.projectionsArray[i].place === this.projectionPlace &&
              this.projectionsArray[i].time === projectionTime)
        {
            this.projectionPrice =  this.projectionsArray[i].price;
            break;
        }
      }


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

      console.log(this.projectionName + " name");

      this.dataService.changeMovieReservation(
        new MovieReservation(this.projectionId,
          this.projectionName,
        this.projectionDate,
      this.projectionTime,
    this.projectionPlace,
  this.projectionPrice)
      );
    }




}
