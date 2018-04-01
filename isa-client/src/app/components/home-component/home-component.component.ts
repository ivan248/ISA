import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../services/home-service.service';

@Component({
  selector: 'home-component',
  templateUrl: './home-component.component.html',
  styles : ['./home-component.component.css']
 
})
export class HomeComponent implements OnInit {
 
    private ime : String;

    constructor( private homeService: HomeService,
            private router : Router) {

    }

    ngOnInit() {

    }

    onClick(){
        let vracenoSaBacka;
        this.homeService.submitTest(this.ime).subscribe(data => console.log(data));
        console.log(this.ime);

    }



}