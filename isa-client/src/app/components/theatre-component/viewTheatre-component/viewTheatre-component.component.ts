import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TheatresService } from '../../../services/theatres-service.service';
import { NgForm } from '@angular/forms';
import { CinemasService } from '../../../services/cinemas-service.service';
import { HomeService } from '../../../services/home-service.service';

@Component({
  selector: 'viewTheatre-component',
  templateUrl: './viewTheatre-component.component.html',
  
  
 
})

export class ViewTheatreComponent implements OnInit {
 

    private changeSeatingChartHidden : boolean = false;
    private currentCinema: any;
    private plays:  any[] = [];
    private hiddenEditing: boolean[] = [];
    private hiddenFastRes: boolean[] = [];
    private projekcijaId: any;
    private numberProjections: any = 20;
    private notFastReservations: any[];
    private addMovie: boolean;
    
    

   

    constructor(private theatresService: TheatresService,
        private cinemasService: CinemasService, private homeService:HomeService,
            private router : Router) {
                
              
    }

    ngOnInit() {
        
        this.addMovie = true;
        this.theatresService.currentth.subscribe(data => this.currentCinema = data);

        this.theatresService.getPlays(this.currentCinema.id).subscribe(data =>
        this.plays = data);
        this.theatresService.getNotFastProjectionsByTheatreId(this.currentCinema.id).subscribe(data =>
              this.notFastReservations = data);
          this.theatresService.initBroj.subscribe(numberProjections => this.numberProjections = numberProjections );
              
          var data = this.currentCinema.projekcije;
          data.forEach(p => {
              this.hiddenEditing[p.id] = true;
              this.hiddenFastRes[p.id] = true;
          });
      }

      addProjection(play : any) {
        console.log(play.id);

        var cinemaid = this.currentCinema.id;
        this.theatresService.selectPlay(play);

        this.router.navigateByUrl('/addProjectionTheatre');
  
        
        
  
      }

     deleteProjection(playid : number, projekcijaid: number, theatreid:number) {

        this.theatresService.deleteProjection(playid, projekcijaid, theatreid).subscribe(data =>
          this.plays = data);

      
      }

      changeProjection(movieid : number, projekcijaid: number, cinemaid:number) {
        this.hiddenEditing[projekcijaid] = false;
        this.projekcijaId=projekcijaid;


       
      }

      openAdding(projekcijaid: number){
        this.hiddenFastRes[projekcijaid] = false
      }

      onSubmit(form: NgForm, id: number){


        this.hiddenEditing[id] = true;
        this.theatresService.sendEdditedProjection(form.value, id)
        .subscribe();

      }

   reserve(ticket:any, ticketid: any, cinemaid: any){
 
        this.theatresService.reserveFast(ticket, ticketid).subscribe();
        console.log(this.currentCinema);
        this.router.navigateByUrl('/viewTheatre');

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
      }

      onSubmit1(price: any, seat: any, mid: any, p: any, cid: any){
        console.log(price.value);
        console.log(seat.value);
        this.theatresService.addFastTicket(price.value, seat.value, mid, p, cid).subscribe();
      }

   /*   delete(ticket:any, ticketid: any, cinemaid: any){
 
        this.theatresService.deleteFast(ticket, ticketid).subscribe();
        this.router.navigateByUrl('/viewCinema');

      }*/

      addMovieFunct(){
        this.addMovie = false;
      }
  
      onSubmitAdd(form: NgForm, cinemaid: any){
        this.addMovie = true;
        console.log(form.value);
        this.theatresService.getPlays(this.currentCinema.id).subscribe(data =>
          this.plays = data);
  
        
  
        this.homeService.addPlay(form.value, cinemaid).subscribe(data => 
            this.theatresService.getPlays(this.currentCinema.id).subscribe(data =>
                this.plays = data)
        );
  
  
      }

  


}
