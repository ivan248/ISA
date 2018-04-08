import { Injectable  } from '@angular/core';  
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { HttpHeaders, HttpClient, HttpErrorResponse, HttpParams  } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'X-Auth-Token' : localStorage.getItem('token')
    
     }),
};
  
 
 @Injectable()
 export class CinemasService {  

    private url : string = "http://localhost:8080/api/cinemas/test";
    private selectedCinema: any;

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

    getMovies(cinemaId: any) {
  
        let params = new HttpParams().append('cinema',cinemaId);
        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });

        return this.http
        .get("http://localhost:8080/api/home/getMovies", {params:params,headers:headers})
        .map((data:[any]) => data);
    }

  

 } 