import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CinemasService } from '../../services/cinemas-service.service';
import { HomeService } from '../../services/home-service.service';
import { NgForm } from '@angular/forms';
import { ViewCinemaComponent } from '../viewCinema-component/viewCinema-component.component';

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
          private homeService: HomeService) {
              
    }

    ngOnInit() {
          this.cinemasService.currentc.subscribe(currentCinema => this.currentCinema = currentCinema);
          this.cinemasService.currentm.subscribe(currentMovie => this.currentMovie = currentMovie);
          this.cinemasService.getMovies(this.currentCinema.id).subscribe(data =>
            this.movies = data);
      }

    onSubmit(f: NgForm, movie: any, cinema: any){


      const body = JSON.parse(JSON.stringify(f.value));
     
      // kako ovaj poslati na view cinema current
     
      this.cinemasService.addProjection(body, movie, cinema)
      .subscribe(data => {
        this.currentCinema = data;
        this.cinemasService.selectCinema(this.currentCinema);
        console.log(this.currentCinema +  " iz addorojetion");
        this.router.navigateByUrl('/viewCinema'); //ne radi osvezavanje prikaza
      }
       );
//mozda ne bi trebalo da se zakomentarise? :D
        //this.cinemasService.currentm.subscribe(movie => this.currentMovie = movie)
    
      
     
      

        

      }
  
    

  


}
