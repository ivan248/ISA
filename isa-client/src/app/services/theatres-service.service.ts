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
 export class TheatresService {  

    private url : string = "http://localhost:8080/api/theatres/test";
    private selectedTheatre: any;

    private th = new BehaviorSubject<any>(new Object(new Object()));
    currentth = this.th.asObservable();

    constructor(private http:HttpClient) {

    }

   
    submitTest(user : any) : Observable<any> {

        const user2 = {
            "username" : user,
            "password" : "test"
        }

        let json = JSON.parse(JSON.stringify(user2));
        return this.http.post(this.url, json, httpOptions);
    }

    getTheatres(){

        return this.http.get("http://localhost:8080/api/home/getTheatres/");
    }

    selectTheatre(theatre: any) {
        console.log("2"+theatre.name);
        this.th.next(theatre);
      }

  

 } 