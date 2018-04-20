import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtheatre-component',
  templateUrl: './addtheatre-component.component.html'
})
export class AddtheatreComponent implements OnInit {

  theatre = {
    name: '',
    description: '',
    address: ''
  }

  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.homeService.addTheatre(this.theatre).subscribe(data=> {
      this.router.navigateByUrl('/theatres')
    })
  }

}
