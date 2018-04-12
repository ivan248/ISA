import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TheatresService } from '../../services/theatres-service.service';
import { HomeService } from '../../services/home-service.service';

@Component({
  selector: 'theatres-component',
  templateUrl: './theatre-component.component.html',
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

export class TheatresComponent implements OnInit {
 

    private theatresArray: any;

    private selectedTheatre: any;

   

    constructor(private theatresService: TheatresService,
            private router : Router) {
              this.theatresService.getTheatres().subscribe(data=>{this.theatresArray=data;console.log(data);});
    }

    ngOnInit() {
      this.theatresService.getTheatres()
      .subscribe(
        data=> 
        {this.theatresArray = data;
          
          console.log(data);
        }
      );
      
    }

    onSelect(theatre: any): void {
      this.selectedTheatre = theatre;
    }
    onClickOpenPage(Theatre:any): void{
        this.selectedTheatre=Theatre;
        this.theatresService.selectTheatre(this.selectedTheatre);
        this.router.navigateByUrl('/viewTheatre');
      
    }

    onClickEditPage(Theatre:any): void{
      this.selectedTheatre=Theatre;
      this.theatresService.selectTheatre(this.selectedTheatre);
      this.router.navigateByUrl('/editTheatre');
        
    }

}
