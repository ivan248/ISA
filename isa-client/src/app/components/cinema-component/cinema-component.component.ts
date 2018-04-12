import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CinemasService } from '../../services/cinemas-service.service';
import { HomeService } from '../../services/home-service.service';

@Component({
  selector: 'cinemas-component',
  templateUrl: './cinema-component.component.html',
  styles : [`
  .list-number li  {
    margin-right: 5px;
    margin-left: 0px;
    top: 5px;
    display:inline-block;
    
}

.list-enquiry li  {
    margin-right: 5px;
    margin-left: 0px;
    margin-bottom:5px;
    top: 15px;
    display:inline-block;
    
}

img{width:80%;}

.small-padding-bg {
  box-shadow: 3px 3px 5px #c2c2c2, -3px -3px 5px #c2c2c2;
}

.jumbotron{
  background: rgba(0, 0, 0, 0.05);
  border: 1px;
  }


`]
  
 
})

export class CinemasComponent implements OnInit {
 

    private cinemasArray: any;

    private selectedCinema: any;

    private editButtonHidden: boolean = true;

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
     // this.editButtonHidden=true;
      
    }

    onClickOpenPage(Cinema:any): void{
      this.selectedCinema = Cinema;
      this.cinemasService.selectCinema(this.selectedCinema);
      this.router.navigateByUrl('/viewCinema');
      
    
  }

  onClickEditPage(Cinema:any): void{
    this.selectedCinema = Cinema;
    this.cinemasService.selectCinema(this.selectedCinema);
    this.router.navigateByUrl('/editCinema');
  
}



}


