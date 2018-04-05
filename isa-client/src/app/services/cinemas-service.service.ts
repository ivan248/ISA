import { Injectable  } from '@angular/core';  
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';

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

    private cList= new BehaviorSubject<any[]>(new Array<any>());
    currentcList = this.cList.asObservable();

    constructor(private http:HttpClient) {

    }


  /*  getCinemas(){

        return this.http.get("http://localhost:8080/api/home/getCinemas");
    }*/
    getCinemas(){
        return this.http.get("http://localhost:8080/api/home/getCinemas",httpOptions).map(data => data)
        .catch((err:HttpErrorResponse) =>
        {
            alert(err.status + " " + err.error.error + " \n" + err.error.message);
            return Observable.throw(err);
        });

       
    }

    selectCinema(cinema: any) {
        this.c.next(cinema);
      }
    
    selectedList(cinemaList: any[]){
        this.cList.next(cinemaList);
      }

  

 } 