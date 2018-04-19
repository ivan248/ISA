import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home-service.service';

@Component({
  selector: 'app-addcinema-component',
  templateUrl: './addcinema-component.component.html'
})
export class AddcinemaComponent implements OnInit {

  cinema = {
    name: '',
    description: '',
    address: ''
  }

  constructor(private homeService: HomeService) { }

  ngOnInit() {
  }

  onSubmit(){
     this.homeService.addCinema(this.cinema).subscribe(data=> {
       console.log(data);
     })
  }

}


