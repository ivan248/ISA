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


      const body = JSON.parse(JSON.stringify(f.value));
    
      this.cinemasService.addProjection(body, movie, cinema)
      .subscribe(data => {
        this.currentCinema = data;
        this.cinemasService.selectCinema(this.currentCinema);
        console.log(this.currentCinema +  " iz addorojetion");
        this.router.navigateByUrl('/viewTheatre'); //ne radi osvezavanje prikaza
      }
       );
//mozda ne bi trebalo da se zakomentarise? :D
        //this.cinemasService.currentm.subscribe(movie => this.currentMovie = movie)
    
      
     
      

        

      }
  
    

  


}
