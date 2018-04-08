import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CinemasService } from '../../services/cinemas-service.service';

@Component({
  selector: 'viewCinema-component',
  templateUrl: './viewCinema-component.component.html',
  
  
 
})

export class ViewCinemaComponent implements OnInit {
 


    private currentCinema: any;
    private movies:  any[] = [];
    
    

   

    constructor(private cinemasService: CinemasService,
            private router : Router) {
              
    }

    ngOnInit() {

        this.cinemasService.currentc.subscribe(currentCinema => this.currentCinema = currentCinema);
        this.cinemasService.getMovies(this.currentCinema.id).subscribe(data =>
          this.movies = data);
      }

      viewMovie(i : number) {
        console.log(i);
        // ovde prikazati sve termine i sale projekcije
  
      }

  


}
