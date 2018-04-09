import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CinemasService } from '../../services/cinemas-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'viewCinema-component',
  templateUrl: './viewCinema-component.component.html',
  
  
 
})

export class ViewCinemaComponent implements OnInit {
 


    private currentCinema: any;
    private movies:  any[] = [];
    private hiddenEditing: boolean[] = [];
    private projekcijaId: any;

      

   

    constructor(private cinemasService: CinemasService,
            private router : Router) {         
    }

    ngOnInit() {

        this.cinemasService.currentc.subscribe(currentCinema => this.currentCinema = currentCinema);
        this.cinemasService.getMovies(this.currentCinema.id).subscribe(data =>
        this.movies = data);
          console.log(this.currentCinema.projekcije.length)
          for(var i = 1; i <= this.currentCinema.projekcije.length; i++){
            this.hiddenEditing[i] = true;
         }
        

      }

      viewMovie(id : number) {
        console.log(id);
        // ovde prikazati sve termine i sale projekcije
  
      }

      addProjection(id : number) {
        console.log(id);
        
        
  
      }

      deleteProjection(movieid : number, projekcijaid: number, cinemaid:number) {
        console.log(movieid);
        console.log(projekcijaid);
        console.log(cinemaid);

        this.cinemasService.deleteProjection(movieid, projekcijaid, cinemaid).subscribe(data =>
          this.movies = data);

      
      }

      changeProjection(movieid : number, projekcijaid: number, cinemaid:number) {
        console.log(projekcijaid);
        this.hiddenEditing[projekcijaid] = false;
        this.projekcijaId=projekcijaid;


      
      }
      deleteMovie(idMovie : number, idCinema: number) {
        this.cinemasService.deleteMovie(idMovie, idCinema).subscribe(data =>
        this.movies = data);
      }

      onSubmit(form: NgForm){

        console.log(form.value);
        this.hiddenEditing[this.projekcijaId] = true;
        // promeniti u bazi
        

      }

  


}
