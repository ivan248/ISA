import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../services/home-service.service';

@Component({
  selector: 'cinema-component',
  templateUrl: './cinema-component.component.html'

 
})

export class CinemaComponent implements OnInit {
 

    private cinemasArray: any;

   

    constructor(private homeService: HomeService,
            private router : Router) {
                this.homeService.getCinemas().subscribe(data=>{this.cinemasArray=data;console.log(data);}); 
    }

    ngOnInit() {
    
      
    }

    
    

}
