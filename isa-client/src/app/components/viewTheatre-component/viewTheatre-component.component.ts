import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TheatresService } from '../../services/theatres-service.service';

@Component({
  selector: 'viewTheatre-component',
  templateUrl: './viewTheatre-component.component.html',
  
  
 
})

export class ViewTheatreComponent implements OnInit {
 


    private currentTheatre: any;
    
    

   

    constructor(private theatresService: TheatresService,
            private router : Router) {
              
    }

    ngOnInit() {
       // this.theatresService.selectTheatre(this.currentTheatre).subscribe(currentTheatre => this.currentTheatre = currentTheatre);
        this.theatresService.currentth.subscribe(currentTheatre => this.currentTheatre = currentTheatre);
      }

  


}
