import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'seating-chart',
  templateUrl: './seating-chart.component.html',
  styles : [``]
 
})
export class SeatingChartComponent implements OnInit {


    private buttonClickedId : number = -1;
    private buttonsArray : number[] = [];

    constructor(private router : Router) {

      for(var i : number = 0; i<13; i++)
      {
        this.buttonsArray[i] = 2;
      }

      this.buttonsArray[3] = -1;
      this.buttonsArray[6] = -1;
    }

    ngOnInit() {

    }

    buttonClicked(id : number) {
      this.buttonClickedId = id;
      console.log(id + " buttonClicked");

      console.log("pre ifa " + this.buttonsArray[id]);
      if(this.buttonsArray[id] != -1)
        this.buttonsArray[id]++;
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
      
      return "btn btn-primary";
    }

    nextStep() {
      for(var i:number=0; i<this.buttonsArray.length; i++)
      {
        if(this.buttonsArray[i]%2 === 1)
        {
          console.log(i);
        }
      }
    }

}
