import { Injectable  } from '@angular/core';  
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';


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

const httpOptions1 = {
    headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
     }),
};
  
 
 @Injectable()
 export class ProfileService {  

    private url : string = "http://localhost:8080/api/profile/";

    constructor(private http:HttpClient) {

    }

    getLoggedUser(): Observable<any> {
        console.log(localStorage.getItem('token') + " iz servisa profile"); 
        return this.http.get(this.url, httpOptions).map((data:Observable<any>) => data); 
    }

    getSomething() {
        
        console.log(localStorage.getItem('token') + "getdugme"); 
        return this.http.get(this.url+"get", httpOptions);
    }

 } 