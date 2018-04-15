import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CinemasService } from '../../services/cinemas-service.service';
import { TheatresService } from '../../services/theatres-service.service';
import { MovieReservation } from '../../model/movieReservation';

@Component({
  selector: 'reservation-component',
  templateUrl: './reservation-component.component.html',
  styles : [`
  .body-content {
    width:100%; 
 }
  
  .wizard {
    margin: 20px auto;
    background: #fff;
}

.wizard .nav-tabs {
    position: relative;
    margin: 40px auto;
    margin-bottom: 0;
    border-bottom-color: #e0e0e0;
}

.wizard > div.wizard-inner {
    position: relative;
}

.connecting-line {
    height: 2px;
    background: #e0e0e0;
    position: absolute;
    width: 80%;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 50%;
    z-index: 1;
}

.wizard .nav-tabs > li.active > a,
.wizard .nav-tabs > li.active > a:hover,
.wizard .nav-tabs > li.active > a:focus {
    color: #555555;
    cursor: default;
    border: 0;
    border-bottom-color: transparent;
}

span.round-tab {
    width: 70px;
    height: 70px;
    line-height: 70px;
    display: inline-block;
    border-radius: 100px;
    background: #fff;
    border: 2px solid #e0e0e0;
    z-index: 2;
    position: absolute;
    left: 0;
    text-align: center;
    font-size: 25px;
}

span.round-tab i {
    color: #555555;
}

.wizard li a.active span.round-tab {
    background: #fff;
    border: 2px solid #5bc0de;

}

.wizard li a.active span.round-tab i {
    color: #5bc0de;
}

span.round-tab:hover {
    color: #333;
    border: 2px solid #333;
}

.wizard .nav-tabs > li {
    width: 19%;
}

.wizard li a:after {
    content: " ";
    position: relative;
    left: 46%;
    top: -20px;
    opacity: 0;
    margin: 0 auto;
    bottom: 0px;
    border: 5px solid transparent;
    border-bottom-color: #5bc0de;
    transition: 0.1s ease-in-out;
}

.wizard li.active.nav-item:after {
    content: " ";
    position: relative;
    left: 46%;
    top: -20px;
    opacity: 1;
    margin: 0 auto;
    bottom: 0px;
    border: 10px solid transparent;
    border-bottom-color: #5bc0de;
}

.wizard .nav-tabs > li a {
    width: 70px;
    height: 70px;
    margin: 20px auto;
    border-radius: 100%;
    padding: 0;
    position: relative;
}

.wizard .nav-tabs > li a:hover {
    background: transparent;
}

.wizard .tab-pane {
    position: relative;
    padding-top: 50px;
}

.wizard h3 {
    margin-top: 0;
}

@media( max-width: 585px) {

    .wizard {
        width: 90%;
        height: auto !important;
    }

    span.round-tab {
        font-size: 16px;
        width: 50px;
        height: 50px;
        line-height: 50px;
    }

    .wizard .nav-tabs > li a {
        width: 50px;
        height: 50px;
        line-height: 50px;
    }

    .wizard li.active:after {
        content: " ";
        position: absolute;
        left: 35%;
    }
}`]
 
})
export class ReservationComponent implements OnInit {

    private step : number = 1;

    private cinemasArray : any;
    private theatresArray : any;
    private moviesArray : any;
    private movieReservation : MovieReservation;

    private cinemaSelected : boolean = false;
    private cinemaId : number;
    private theatreId : number;

    private selectedSeats : any[] = [];


    constructor(private router : Router,
    private cinemaService : CinemasService,
    private theatreService : TheatresService,) {

    }

    ngOnInit() {

        this.cinemaService.getCinemas()
        .subscribe(data => this.cinemasArray = data);

        this.theatreService.getTheatres()
        .subscribe(data => this.theatresArray = data);
        

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
    }

    onMovieReservationChanged(movieReservation: MovieReservation) {
        this.movieReservation = movieReservation;
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
        this.cinemaService.makeCinemaReservation(this.movieReservation)
            .subscribe(data => console.log(data));

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
