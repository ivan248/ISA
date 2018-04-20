import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CinemasService } from '../../services/cinemas-service.service';
import { TheatresService } from '../../services/theatres-service.service';
import { HomeService } from '../../services/home-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'addProjectionTheatre-component',
  templateUrl: './addProjectionTheatre-component.component.html',
  
  
 
})

export class AddProjectionComponentTheatre implements OnInit {
 
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
          this.theatresService.currentth.subscribe(currentCinema => this.currentCinema = currentCinema);
          this.theatresService.currentp.subscribe(currentMovie => this.currentMovie = currentMovie);
         
          this.theatresService.getPlays(this.currentCinema.id).subscribe(data =>
            this.movies = data);
      }

    onSubmit(f: NgForm, movie: any, cinema: any){


        console.log(f.value);
        console.log(cinema);
        console.log(movie);
        const body = JSON.parse(JSON.stringify(f.value));
    
      this.theatresService.addProjection(body, movie, cinema)
      .subscribe(data => {
        this.currentCinema = data;
        this.theatresService.selectTheatre(cinema);
        console.log(this.currentCinema +  " iz addorojetion");
        this.router.navigateByUrl('/theatres'); 

        
      }
       );



      }
  
    

  


}
