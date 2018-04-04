import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CinemasService } from '../../services/cinemas-service.service';

@Component({
  selector: 'viewCinema-component',
  templateUrl: './viewCinema-component.component.html',
  
  
 
})

export class ViewCinemaComponent implements OnInit {
 


    private currentCinema: any;
    
    

   

    constructor(private cinemasService: CinemasService,
            private router : Router) {
              
    }

    ngOnInit() {
        this.cinemasService.currentc.subscribe(currentCinema => this.currentCinema = currentCinema);
      }

  


}
