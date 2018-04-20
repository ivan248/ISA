import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CinemasService } from '../../services/cinemas-service.service';
import { TheatresService } from '../../services/theatres-service.service';
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
    
    private movies:  any[] = [];    


    constructor(private cinemasService: CinemasService,
            private router : Router,
          private homeService: HomeService,
          private theatresService: TheatresService) {
              
    }

    ngOnInit() {
          this.cinemasService.currentc.subscribe(currentCinema => this.currentCinema = currentCinema);
          this.cinemasService.currentm.subscribe(currentMovie => this.currentMovie = currentMovie);
         
          this.cinemasService.getMovies(this.currentCinema.id).subscribe(data =>
            this.movies = data);
      }

    onSubmit(f: NgForm, movie: any, cinema: any){


      const body = JSON.parse(JSON.stringify(f.value));
    
      this.cinemasService.addProjection(body, movie, cinema)
      .subscribe(data => {
        this.currentCinema = data;
        this.cinemasService.selectCinema(cinema);
        console.log(this.currentCinema +  " iz addorojetion");
        this.router.navigateByUrl('/cinemas');
      }
       );

     
      

        

      }
  
    

  


}
