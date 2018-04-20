import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CinemasService } from '../../../services/cinemas-service.service';
import { NgForm } from '@angular/forms';
import { HomeService } from '../../../services/home-service.service';


@Component({
  selector: 'viewCinema-component',
  templateUrl: './viewCinema-component.component.html',
  

})


export class ViewCinemaComponent implements OnInit {
 

    private changeSeatingChartHidden : boolean = false;
    private currentCinema: any;
    private movies:  any[] = [];
    private hiddenEditing: boolean[] = [];
    private hiddenFastRes: boolean[] = [];
    private projekcijaId: any;
    private numberProjections: any = 20;
    private notFastReservations: any[];
    private addMovie: boolean;


    constructor(private cinemasService: CinemasService,
      private homeService: HomeService,
            private router : Router) { 
         
    }

    ngOnInit() {

        this.cinemasService.currentc.subscribe(data => {
            this.currentCinema = data; 
            console.log(this.currentCinema);
            console.log("ispis iz cinema ngoniit viewcinema ");
            this.addMovie = true;
        
          });
      

        this.cinemasService.getMovies(this.currentCinema.id).subscribe(data =>
        this.movies = data);
        this.cinemasService.getNotFastProjectionsByCinemaId(this.currentCinema.id).subscribe(data =>
            this.notFastReservations = data);
        this.cinemasService.initBroj.subscribe(numberProjections => this.numberProjections = numberProjections );
            
        var data = this.currentCinema.projekcije;
        data.forEach(p => {
            this.hiddenEditing[p.id] = true;
            this.hiddenFastRes[p.id] = true;
        });
         
        

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

      openAdding(projekcijaid: number){
        this.hiddenFastRes[projekcijaid] = false
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
      addToFast(cinemaid: any, ticketid: any, ticket: any){
        console.log(ticketid);
        this.cinemasService.addToFast(cinemaid, ticketid, ticket).subscribe();
        this.router.navigateByUrl('/cinemas');
        
    }

    reserve(ticket:any, ticketid: any, projectionId: any){
 
        console.log(projectionId);
        this.cinemasService.reserveFast(ticket, ticketid, projectionId).subscribe();
        console.log(this.currentCinema);
        this.router.navigateByUrl('/viewCinema');

    }

    
    private currentProjection : any;

    changeSeatingChart(projectionId: any) {
        this.changeSeatingChartHidden = true;
        console.log(this.changeSeatingChartHidden);
        this.cinemasService.getProjectionById(projectionId)
        .subscribe(data => this.currentProjection = data);

    }


    onChangeSelectedSeats( array : any) {

        for (let seat of array){

            this.cinemasService.deleteSeats(this.currentProjection, this.currentProjection.id, seat).subscribe();
        }
       
      }

      finishChangingSeats() {
          this.changeSeatingChartHidden = !this.changeSeatingChartHidden;
          this.router.navigateByUrl('/cinemas');
      }

      onSubmit1(price: any, seat: any, mid: any, p: any, cid: any){
        console.log(price.value);
        console.log(seat.value);
        this.cinemasService.addFastTicket(price.value, seat.value, mid, p, cid).subscribe();
        this.router.navigateByUrl('/cinemas');
      }

      delete(ticket:any, ticketid: any, cinemaid: any){
 
        this.cinemasService.deleteFast(ticket, ticketid).subscribe();
        this.router.navigateByUrl('/viewCinema');

    }

    addMovieFunct(){
      this.addMovie = false;
    }

    onSubmitAdd(form: NgForm, cinemaid: any){
      this.addMovie = true;
      console.log(form.value);
      this.cinemasService.getMovies(this.currentCinema.id).subscribe(data =>
        this.movies = data);

      

      this.homeService.addMovie(form.value, this.currentCinema.id).subscribe(data => this.cinemasService.getMovies(this.currentCinema.id).subscribe(data =>
        this.movies = data));
        


    }

  

  }
