import { Injectable  } from '@angular/core';  
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'X-Auth-Token' : localStorage.getItem('token')
     }),
};
  
 
 @Injectable()
 export class CinemasService {  

    private url : string = "http://localhost:8080/api/cinemas/test";
    private selectedTheatre: any;

    private c = new BehaviorSubject<any>(new Object(new Object()));
    currentc = this.c.asObservable();

    constructor(private http:HttpClient) {

    }


    getCinemas(){

        return this.http.get("http://localhost:8080/api/home/getCinemas/");
    }

    selectCinema(cinema: any) {
        this.c.next(cinema);
      }

  

 } 