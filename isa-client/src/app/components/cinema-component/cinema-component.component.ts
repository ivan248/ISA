import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CinemasService } from '../../services/cinemas-service.service';
import { HomeService } from '../../services/home-service.service';

@Component({
  selector: 'cinemas-component',
  templateUrl: './cinema-component.component.html',
  styles : [`.selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .cinemasArray {
    margin: 0 0 0 0;
    list-style-type: none;
    padding: 0;
    width: 20em;
  }
  .cinemasArray li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: 0.5em;
    padding: .3em 0;
    height: 6em;
    border-radius: 4px;
  }
  .cinemasArray li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .cinemasArray li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .cinemasArray .text {
    position: relative;
    top: -3px;
  }
  .cinemasArray .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 1em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 2em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }`]
  
 
})

export class CinemasComponent implements OnInit {
 

    private cinemasArray: any;

    private selectedCinema: any;

   

    constructor(private cinemasService: CinemasService,
            private router : Router) {
              this.cinemasService.getCinemas().subscribe(data=>{this.cinemasArray=data;console.log(data);});
    }

    ngOnInit() {
      this.cinemasService.getCinemas()
      .subscribe(
        data=> 
        {this.cinemasArray = data;
          
          console.log(data);
        }
      );
      
    }

    onSelect(cinema: any): void {
      this.selectedCinema = cinema;
    }

    onClickOpenPage(Cinema:any): void{
      this.selectedCinema=Cinema;
      this.cinemasService.selectCinema(this.selectedCinema);
      this.router.navigateByUrl('/viewCinema');
    
  }


}
