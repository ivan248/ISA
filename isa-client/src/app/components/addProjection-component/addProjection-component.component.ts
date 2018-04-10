import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CinemasService } from '../../services/cinemas-service.service';
import { HomeService } from '../../services/home-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'addProjection-component',
  templateUrl: './addProjection-component.component.html',
  
  
 
})

export class AddProjectionComponent implements OnInit {
 
    private currentCinema: any;
    private currentMovie: any;
    private projekcija: any;


    constructor(private cinemasService: CinemasService,
            private router : Router,
          private homeService: HomeService) {
              
    }

    ngOnInit() {
        this.cinemasService.currentc.subscribe(currentCinema => this.currentCinema = currentCinema);
        this.cinemasService.currentm.subscribe(currentMovie => this.currentMovie = currentMovie);
      
      }

    onSubmit(f: NgForm, movie: any, cinema: any){


      const body = JSON.parse(JSON.stringify(f.value));
      this.cinemasService.addProjection(body, movie, cinema).subscribe();
      this.cinemasService.currentc.subscribe(cinema => this.currentCinema = cinema);
      this.router.navigateByUrl('/viewCinema');
      this.cinemasService.getMovies(cinema);
      
       

        

      }
  
    

  


}
