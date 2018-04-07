import { Component, OnInit } from '@angular/core';
import { CinemasService } from '../../../services/cinemas-service.service';
import { TheatresService } from '../../../services/theatres-service.service';
import { NgForm } from '@angular/forms';
import { FanzoneService } from '../../../services/fanzone-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addnewitem-component',
  templateUrl: './addnewitem-component.component.html'
})
export class AddnewitemComponent implements OnInit {

  places = [
    'Cinema',
    'Theatre'
  ];

  cinemas : any;
  theatres: any;

  item = {
    name : "",
    description : "",
    price : null,
    image : "",
    place : "Cinema",
    placeID : 1
  };

  

  constructor(private cinemaService: CinemasService, private theatresService: TheatresService, 
    private fanzoneService: FanzoneService, private router: Router
  ) { }

  ngOnInit() {
    this.cinemaService.getCinemas().subscribe(data => {
      this.cinemas = data;
      console.log(this.cinemas);
    });

    this.theatresService.getTheatres().subscribe(data =>{
      this.theatres = data;
      console.log(this.theatres);
    })
    
  }

  onSubmit(form : NgForm) {
    console.log(this.item);

    this.fanzoneService.sendNewNewItem(this.item).subscribe(data=> console.log(data));
    this.router.navigateByUrl("/fanzone");
  }

}
