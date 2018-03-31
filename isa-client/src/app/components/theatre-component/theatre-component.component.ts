import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TheatresService } from '../../services/theatres-service.service';
import { HomeService } from '../../services/home-service.service';

@Component({
  selector: 'theatres-component',
  templateUrl: './theatre-component.component.html',
  styles : [`.selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .theatresArray {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .theatresArray li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .theatresArray li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .theatresArray li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .theatresArray .text {
    position: relative;
    top: -3px;
  }
  .theatresArray .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }`]
  
 
})

export class TheatresComponent implements OnInit {
 

    private theatresArray: any;

    private selectedTheatre: any;

   

    constructor(private homeService: HomeService,
            private router : Router) {
              this.homeService.getTheatres().subscribe(data=>{this.theatresArray=data;console.log(data);});
    }

    ngOnInit() {
    
      
    }

    onSelect(theatre: any): void {
      this.selectedTheatre = theatre;
    }


}
