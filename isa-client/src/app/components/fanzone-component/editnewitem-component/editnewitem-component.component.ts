import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data-service';
import { CinemasService } from '../../../services/cinemas-service.service';
import { TheatresService } from '../../../services/theatres-service.service';
import { NewItemService } from '../../../services/newitem-service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editnewitem-component',
  templateUrl: './editnewitem-component.component.html'
})
export class EditnewitemComponent implements OnInit {

  originalItem : any;
  places = [
    'Cinema',
    'Theatre'
  ];
  place : string;
  placeID : number;

  cinemas : any;
  theatres: any;

  item = {
    itemID : 0,
    name : "",
    description : "",
    price : null,
    image : "",
    place : 'Cinema',
    placeID : 1
  };

  // item = {
  //   name : this.originalItem.name,
  //   description : this.originalItem.description,
  //   price : this.originalItem.price,
  //   image : this.originalItem.image,
  //   place : "Cinema",
  //   placeID : 1
  // };

  constructor(private cinemaService: CinemasService, private theatresService: TheatresService, 
          private dataService: DataService, private newItemService: NewItemService, private router: Router
  ) { }

  ngOnInit() {
    this.dataService.currentSelectedNewItem.subscribe(data => {
      this.originalItem = data;
      console.log(this.originalItem);
      if(this.originalItem.cinemaOwner == null){
        this.place='Theatre';
        this.placeID=this.originalItem.theatreOwner.theatre_id;
      } else {
        this.place='Cinema';
        this.placeID=this.originalItem.cinemaOwner.cinema_id;
      }

      console.log(this.place);
      console.log(this.placeID);

      this.item.itemID = this.originalItem.itemID;
      this.item.name = this.originalItem.name;
      this.item.description = this.originalItem.description;
      this.item.price = this.originalItem.price;
      this.item.image = this.originalItem.image;
      this.item.place = this.place;
      this.item.placeID = this.placeID;
      console.log(this.item);

      this.cinemaService.getCinemas().subscribe(data => {
        this.cinemas = data;
        console.log(this.cinemas);
      });
  
      this.theatresService.getTheatres().subscribe(data =>{
        this.theatres = data;
        console.log(this.theatres);
      })

    });

  }

  onSubmit(form : NgForm) {
    
    if( this.item.place === 'Cinema'){
      //znaci da se item moze kupiti u nekom bioskopu
      console.log(this.originalItem)
      console.log("Usao u cinema")
      this.cinemaService.getCinema(this.item.placeID).subscribe(data => {
        this.originalItem.cinemaOwner = data;
        console.log(this.item);
        console.log(this.originalItem);
        this.originalItem.name = this.item.name;
        this.originalItem.description = this.item.description;
        this.originalItem.price = this.item.price;
        this.originalItem.image = this.item.image;
        this.newItemService.sendEdditedItem(this.originalItem).subscribe(data=> {
          if (data == false){
            alert("This item has changed meanwhile.Please refresh your page");
            this.router.navigateByUrl('/fanzone')
          }
          
        });
        this.router.navigateByUrl("/fanzone");
      })
      this.originalItem.theatreOwner = null;
    } else {
      //znc da se item moze kupiti u nekom pozoristu
      console.log(this.originalItem)
      console.log("Usao u theatre")
      this.originalItem.cinemaOwner = null;
      this.theatresService.getTheatre(this.item.placeID).subscribe(data => {
        this.originalItem.theatreOwner = data;
        console.log(this.item);
        console.log(this.originalItem);
        this.originalItem.name = this.item.name;
        this.originalItem.description = this.item.description;
        this.originalItem.price = this.item.price;
        this.originalItem.image = this.item.image;
        this.newItemService.sendEdditedItem(this.originalItem).subscribe(data=> {
          if (data == false){
            alert("This item has changed meanwhile.Please refresh your page");
            this.router.navigateByUrl('/fanzone')
          } else {
            this.router.navigateByUrl("/fanzone");
          }

        });
        
      });
    }

    
    

    
  }

}
