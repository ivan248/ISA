import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CinemasService } from '../../services/cinemas-service.service';

@Component({
  selector: 'editCinema-component',
  templateUrl: './editCinema-component.component.html',
  
  
 
})

export class EditCinemaComponent implements OnInit {
 
    private currentCinema: any;
    private currentCinemaList: any[];


    constructor(private cinemasService: CinemasService,
            private router : Router) {
              
    }

    ngOnInit() {
        this.cinemasService.currentc.subscribe(currentCinema => this.currentCinema = currentCinema);
      
      }
    onSubmit(){
        console.log(this.currentCinema);
    
      }
    

  


}
