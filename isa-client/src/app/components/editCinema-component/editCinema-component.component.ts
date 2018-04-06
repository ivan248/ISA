import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CinemasService } from '../../services/cinemas-service.service';
import { HomeService } from '../../services/home-service.service';

@Component({
  selector: 'editCinema-component',
  templateUrl: './editCinema-component.component.html',
  
  
 
})

export class EditCinemaComponent implements OnInit {
 
    private currentCinema: any;
    private currentCinemaList: any[];


    constructor(private cinemasService: CinemasService,
            private router : Router,
          private homeService: HomeService) {
              
    }

    ngOnInit() {
        this.cinemasService.currentc.subscribe(currentCinema => this.currentCinema = currentCinema);
      
      }
    onSubmit(){
        console.log(this.currentCinema);

         this.homeService.sendEdditedCinema(this.currentCinema)
          .subscribe();
         this.router.navigateByUrl('/cinemas');
    
      }
    

  


}
