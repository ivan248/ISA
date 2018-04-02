import { Injectable  } from '@angular/core';  
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
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
       let header=new Headers({'Content-Type': 'application/json'});
       this.http.post(this.url, user,  httpOptions).map(data => console.log(data));   

       return this.http.post("http://localhost:8080/login", user,  httpOptions).map(data => console.log(data)); 
    }

    submitRegistration(user : any) : Observable<any> {

        let json = JSON.parse(JSON.stringify(user));
        return this.http.post("http://localhost:8080/api/login/registrationMessage", json, httpOptions);
    }

 } 