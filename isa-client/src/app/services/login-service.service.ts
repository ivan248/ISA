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
 export class LoginService {  

    private url : string = "http://localhost:8080/api/login/test";

    constructor(private http:HttpClient) {

    }

    getLogin(password : any, username : any): Observable<any> { 


       let vraceno  = ""; 
       const user = {
           "username" : username,
           "password" : password
       }
       let header = new HttpHeaders({'Content-Type': 'application/json'});  



       return this.http.post("http://localhost:8080/api/login/login", user, httpOptions1); 
    }

    submitRegistration(user : any) : Observable<any> {

        // if(localStorage.getItem('token') == null)
        // return new Observable<any>();

        let json = JSON.parse(JSON.stringify(user));
        return this.http.post("http://localhost:8080/api/login/registrationMessage", json, httpOptions1);
    }

 } 