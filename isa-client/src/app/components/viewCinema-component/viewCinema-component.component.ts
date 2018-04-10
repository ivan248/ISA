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
    private numberProjections: any = 20;

      

   

    constructor(private cinemasService: CinemasService,
            private router : Router) {         
    }

    ngOnInit() {

        this.cinemasService.currentc.subscribe(currentCinema => this.currentCinema = currentCinema);
        this.cinemasService.getMovies(this.currentCinema.id).subscribe(data =>
        this.movies = data);
        this.cinemasService.initBroj.subscribe(numberProjections => this.numberProjections = numberProjections );
      
        var data = this.currentCinema.projekcije;
        data.forEach(p => {
            this.hiddenEditing[p.id] = true;
        });
         
        

      }

      viewMovie(id : number) {
        console.log(id);
        // ovde prikazati sve termine i sale projekcije
  
      }

      addProjection(movie : any) {
        console.log(movie.id);

        var cinemaid = this.currentCinema.id;
        this.cinemasService.selectMovie(movie);

        this.router.navigateByUrl('/addProjection');
  
        
        
  
      }

      deleteProjection(movieid : number, projekcijaid: number, cinemaid:number) {
        console.log(movieid);
        console.log(projekcijaid);
        console.log(cinemaid);

        this.cinemasService.deleteProjection(movieid, projekcijaid, cinemaid).subscribe(data =>
          this.movies = data);

      
      }

      changeProjection(movieid : number, projekcijaid: number, cinemaid:number) {
        this.hiddenEditing[projekcijaid] = false;
        this.projekcijaId=projekcijaid;


      
      }
      deleteMovie(idMovie : number, idCinema: number) {
        this.cinemasService.deleteMovie(idMovie, idCinema).subscribe(data =>
        this.movies = data);
      }

      onSubmit(form: NgForm, id: number){


        this.hiddenEditing[id] = true;
        this.cinemasService.sendEdditedProjection(form.value, id)
        .subscribe();

        

      }

  


}
