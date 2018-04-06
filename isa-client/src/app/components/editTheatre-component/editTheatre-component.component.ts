import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TheatresService } from '../../services/theatres-service.service';
import { HomeService } from '../../services/home-service.service';

@Component({
  selector: 'editTheatre-component',
  templateUrl: './editTheatre-component.component.html',
  
  
 
})

export class EditTheatreComponent implements OnInit {
 
    private currentTheatre: any;
    private currentTheatreList: any[];


    constructor(private theatresService: TheatresService,
            private router : Router,
          private homeService: HomeService) {
              
    }

    ngOnInit() {
        this.theatresService.currentth.subscribe(currentTheatre => this.currentTheatre = currentTheatre);
      
      }
    onSubmit(){
        console.log("theatre"+this.currentTheatre);

         this.homeService.sendEdditedTheatre(this.currentTheatre)
          .subscribe();
         this.router.navigateByUrl('/theatres');
    
      }
    


  


}
