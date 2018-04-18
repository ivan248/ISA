import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TheatresService } from '../../../services/theatres-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'viewTheatre-component',
  templateUrl: './viewTheatre-component.component.html',
  
  
 
})

export class ViewTheatreComponent implements OnInit {
 

    private changeSeatingChartHidden : boolean = false;
    private currentTheatre: any;
    private plays:  any[] = [];
    private hiddenEditing: boolean[] = [];
    private hiddenFastRes: boolean[] = [];
    private projekcijaId: any;
    private numberProjections: any = 20;
    private notFastReservations: any[];
    
    

   

    constructor(private theatresService: TheatresService,
            private router : Router) {
              
    }

    ngOnInit() {
        this.theatresService.currentth.subscribe(data => this.currentTheatre = data);

        this.theatresService.getPlays(this.currentTheatre.id).subscribe(data =>
        this.plays = data);
        this.theatresService.getNotFastProjectionsByTheatreId(this.currentTheatre.id).subscribe(data =>
              this.notFastReservations = data);
          this.theatresService.initBroj.subscribe(numberProjections => this.numberProjections = numberProjections );
              
          var data = this.currentTheatre.projekcije;
          data.forEach(p => {
              this.hiddenEditing[p.id] = true;
              this.hiddenFastRes[p.id] = true;
          });
      }

      addProjection(play : any) {
        console.log(play.id);

        var theatreid = this.currentTheatre.id;
        this.theatresService.selectPlay(play);

        this.router.navigateByUrl('/addProjection');
  
        
        
  
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
    /*  addToFast(theatreid: any, ticketid: any, ticket: any){
        console.log(ticketid);
        this.theatresService.addToFast(cinemaid, ticketid, ticket).subscribe();
        
    }

    reserve(ticket:any, ticketid: any, cinemaid: any){
 
        console.log(cinemaid);
        this.cinemasService.reserveFast(ticket, ticketid).subscribe();
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
      }

      onSubmit1(price: any, seat: any, mid: any, p: any, cid: any){
        console.log(price.value);
        console.log(seat.value);
        this.theatresService.addFastTicket(price.value, seat.value, mid, p, cid).subscribe();
      }

      delete(ticket:any, ticketid: any, cinemaid: any){
 
        this.theatresService.deleteFast(ticket, ticketid).subscribe();
        this.router.navigateByUrl('/viewCinema');

      }*/

  


}
