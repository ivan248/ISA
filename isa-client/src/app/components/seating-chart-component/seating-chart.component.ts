import { Component, EventEmitter, OnInit, Input, Output, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'seating-chart',
  templateUrl: './seating-chart.component.html',
  styles : [``]
 
})
export class SeatingChartComponent implements OnInit, OnChanges {


    private buttonClickedId : number = -1;
    private buttonsArray : number[] = [];

    @Input() currentProjection : any;
    @Output() selectedSeats = new EventEmitter<any>();

    constructor(private router : Router) {


    }

    ngOnInit() {

      for(var i : number = 0; i<85; i++)
      {
        this.buttonsArray[i] = 2;
      }

      
     

    }

    ngOnChanges() {
      if(this.currentProjection !== undefined)
      {
        for(var i : number =0; i<this.currentProjection.tickets.length; i++)
        {
          this.buttonsArray[this.currentProjection.tickets[i].seatNumber] = -1;
        }
      }
    }

    buttonClicked(id : number) {
      this.buttonClickedId = id;
      let seatsSelected : any[] = [];
      console.log(id + " buttonClicked");

      console.log("pre ifa " + this.buttonsArray[id]);
      if(this.buttonsArray[id] != -1)
        this.buttonsArray[id]++;


        for(var i:number=0; i<this.buttonsArray.length; i++)
        {
          if(this.buttonsArray[i]%2 === 1)
          {
            seatsSelected.push(i);
            console.log(i);
          }
        }
  
      console.log(seatsSelected);
      this.selectedSeats.emit(seatsSelected);
      
      
      console.log("posle ifa " + this.buttonsArray[id]);
    }

    checkClass(idButton : number) {

      if(this.buttonsArray[idButton]%2 === 0)
      {
        return "btn btn-success";
      }

      if(this.buttonsArray[idButton]%2 === -1)
      {
        return "btn btn-secondary disabled";
      }
      
      return "btn btn-primary invisible";
    }

    nextStep() {

      let seatsSelected : any[] = [];

      for(var i:number=0; i<this.buttonsArray.length; i++)
      {
        if(this.buttonsArray[i]%2 === 1)
        {
          seatsSelected.push(i);
          console.log(i);
        }
      }

      console.log(seatsSelected);
      this.selectedSeats.emit(seatsSelected);
      
    }

}
