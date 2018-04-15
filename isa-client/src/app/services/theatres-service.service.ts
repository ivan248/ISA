import { Injectable  } from '@angular/core';  
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

  
 
 @Injectable()
 export class TheatresService {  

    private url : string = "http://localhost:8080/api/theatres/test";
    private selectedTheatre: any;

    private th = new BehaviorSubject<any>(new Object(new Object()));
    currentth = this.th.asObservable();

    constructor(private http:HttpClient) {

    }

    getTheatres(){

        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });

        return this.http.get("http://localhost:8080/api/home/getTheatres", {headers:headers});
    }

    selectTheatre(theatre: any) {
        this.th.next(theatre);
      }

    searchTheatres(theatre : String) {
       
        let params = new HttpParams().set('theatre', theatre.toString());
     
        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });


        return this.http
        .get("http://localhost:8080/api/home/searchTheatres",
         {params:params, headers:headers});
 
    }

    getPlays(theatreId : any) {

        let params = new HttpParams().set('theatreId', theatreId.toString());
     
        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });


        return this.http
        .get("http://localhost:8080/api/home/getPlays",
         {params:params, headers:headers});

    }

  

 } 