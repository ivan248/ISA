import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TheatresService } from '../../../services/theatres-service.service';
import { HomeService } from '../../../services/home-service.service';

@Component({
  selector: 'editTheatre-component',
  templateUrl: './editTheatre-component.component.html',
  
  
 
})

export class EditTheatreComponent implements OnInit {
 
    private currentCinema: any;
    private currentTheatreList: any[];


    constructor(private theatresService: TheatresService,
            private router : Router,
          private homeService: HomeService) {
              
    }

    ngOnInit() {
        this.theatresService.currentth.subscribe(currentCinema => this.currentCinema = currentCinema);
      
      }
    onSubmit(){
        console.log("theatre"+this.currentCinema);

         this.homeService.sendEdditedTheatre(this.currentCinema)
          .subscribe();
         this.router.navigateByUrl('/theatres');
    
      }
    


  


}
