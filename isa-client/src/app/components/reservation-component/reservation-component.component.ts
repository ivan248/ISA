import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CinemasService } from '../../services/cinemas-service.service';
import { TheatresService } from '../../services/theatres-service.service';
import { MovieReservation } from '../../model/movieReservation';
import { HomeService } from '../../services/home-service.service';
import { CATCH_STACK_VAR, CATCH_ERROR_VAR } from '@angular/compiler/src/output/abstract_emitter';
import { ProfileService } from '../../services/profile-service';

@Component({
  selector: 'reservation-component',
  templateUrl: './reservation-component.component.html',
  styleUrls : [`reservation-component.component.css`]
 
})
export class ReservationComponent implements OnInit {

    private step : number = 1;

    private cinemasArray : any;
    private theatresArray : any;
    private moviesArray : any;
    private movieReservation : MovieReservation;
    private friendsInvited : any[] = [];

    private cinemaSelected : boolean = false;
    private cinemaId : number;
    private theatreId : number;

    private selectedSeats : any[] = [];

    // for transactional
    private projectionSeats : any[] = [];


    constructor(private router: Router,
    private cinemaService: CinemasService,
    private theatreService: TheatresService,
    private homeService: HomeService,
    private profileService: ProfileService) {

    }

    ngOnInit() {

        this.cinemaService.getCinemas()
        .subscribe(data => this.cinemasArray = data);

        this.theatreService.getTheatres()
        .subscribe(data => this.theatresArray = data);
        
        this.profileService.getLoggedUser().subscribe(data=>console.log(data));

    }

    onChangeTheatre(theatre: any) {
        this.theatreId = theatre;
      }

    onChangeCinema(cinema: any) {
        this.cinemaId = cinema;
      }

    onChangeCinemaSelected(cinemaSelected: any) {
        console.log("Trenutni cinemasel: " + this.cinemaSelected);
        console.log("dosao cinemasel: " + cinemaSelected);

        this.cinemaSelected = cinemaSelected;


        //cinema je true, theatre je false
        console.log("Posle : " + this.cinemaSelected);
    }

    onChangeSelectedSeats(selectedSeats : any) {
        this.selectedSeats = selectedSeats;
        console.log("Iz reservationa : " + selectedSeats);

        // for transactional
        // for transactional



    }

    onMovieReservationChanged(movieReservation: MovieReservation) {
        this.movieReservation = movieReservation;

        this.homeService.getProjectionSeats(this.movieReservation.projectionId, this.movieReservation.movieORplayID)
        .subscribe(data =>{
            this.projectionSeats = data;
            console.log(this.projectionSeats + "ispis sedista");
        } );
    }

    onFriendsInvitedChanged(friendsInvited : any) {
        console.log("onFriendsInvitedChanged : ispis ");
        console.log(friendsInvited);
        this.friendsInvited = friendsInvited;
    }

    nextStep() {
       
        this.step++;

        if(this.step==2) 
        {
            if(!this.cinemaSelected)
            {
                console.log("usao u nadji movies ");
                this.cinemaService.getMovies(this.cinemaId)
                .subscribe(data => this.moviesArray = data);
            }
            else
            {
                console.log("usao u nadji plays ");
                this.theatreService.getPlays(this.theatreId)
                .subscribe(data => this.moviesArray = data);
            }
        }

        
    }

    previousStep() {
        this.step--;
    }

    finishReservation() {

        this.movieReservation.invitedFriends = this.friendsInvited;

        var seats : any[] = [];

        for(var i:number=0; i<this.movieReservation.seatsTaken.length; i++)
        {
            seats.push(this.projectionSeats[this.movieReservation.seatsTaken[i]-1]);
            //this.homeService.reserveSeat(this.projectionSeats[this.movieReservation.seatsTaken[i]-1])
            //.subscribe(data => console.log(data));
        }


        this.movieReservation.seats = seats;
        console.log("finishReservation : ispis ");
        console.log(this.movieReservation.seats);

        if(!this.cinemaSelected)
        {
            console.log("Saljem iz cinema!");
            this.cinemaService.makeCinemaReservation(this.movieReservation)
            .subscribe(data => console.log(data));
        }
        else
        {
            console.log("Saljem iz theatre!");
            this.theatreService.makeTheatreReservation(this.movieReservation)
            .subscribe(data => console.log(data));
        }
      

        

        this.step = 1;
    }

    makeOneActive() {
        this.step = 1;
    }

    makeTwoActive() {
        if(this.step===2)
            return "nav-link active";

        return "nav-link disabled";
    }

    makeThreeActive() {
        if(this.step===3)
            return "nav-link active";
    
        return "nav-link disabled";
    }

    makeFourActive() {
        if(this.step===4)
            return "nav-link active";
    
        return "nav-link disabled";
    }

    makeFiveActive() {
        if(this.step===5)
            return "nav-link active";
    
        return "nav-link disabled";
    }

    makeOneInactive() {
        if(this.step>1)
            return "nav-link disabled";
    
        return "nav-link active";
    }


    

}
