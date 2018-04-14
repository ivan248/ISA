import { Injectable  } from '@angular/core';  
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';

  
 
 @Injectable()
 export class HomeService {  

    private url : string = "http://localhost:8080/api/home/test";

    constructor(private http:HttpClient) {

    }


  //  getTheatres(){
  //      return this.http.get("http://localhost:8080/api/home/getTheatres");
  //  }

    getCinemas(){
        
        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });

        return this.http
        .get("http://localhost:8080/api/home/getCinemas", {headers:headers})
        .map(data => data)
        .catch((err:HttpErrorResponse) =>
        {
            alert(err.status + " " + err.error.error + " \n" + err.error.message);
            return Observable.throw(err);
        }
    );
    }

    sendEdditedCinema(cinema : any){
        const body = JSON.parse(JSON.stringify(cinema));

        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         })
        
        console.log("sendeditedcinema"+body.name);
        return this.http.post('http://localhost:8080/api/home/editC',body,{
            headers: headers
        } );

    }

    sendEdditedTheatre(theatre : any){
        const body = JSON.parse(JSON.stringify(theatre));
        
        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         })

        console.log("sendeditedtheatre"+body.name);
        return this.http.post('http://localhost:8080/api/home/editTh',body,{
            headers: headers
        } );

    }


  

 } 