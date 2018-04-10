import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CinemasService } from '../../services/cinemas-service.service';
import { HomeService } from '../../services/home-service.service';

@Component({
  selector: 'addProjection-component',
  templateUrl: './addProjection-component.component.html',
  
  
 
})

export class AddProjectionComponent implements OnInit {
 
    private currentCinema: any;
    private currentMovie: any;


    constructor(private cinemasService: CinemasService,
            private router : Router,
          private homeService: HomeService) {
              
    }

    ngOnInit() {
        this.cinemasService.currentc.subscribe(currentCinema => this.currentCinema = currentCinema);
        this.cinemasService.currentm.subscribe(currentMovie => this.currentMovie = currentMovie);
      
      }
  
    

  


}
