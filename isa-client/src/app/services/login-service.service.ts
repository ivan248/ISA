import { Injectable  } from '@angular/core';  
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';

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
       
       let headers = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'X-Auth-Token' : localStorage.getItem('token')
     }); 



       return this.http.post("http://localhost:8080/api/login/login", user, {headers:headers})
       .catch((err:HttpErrorResponse) =>
       {
           alert(err.status + "Unauthorized.");
           return Observable.throw(err);
       }); 
    }

    submitRegistration(user : any) : Observable<any> {

        // if(localStorage.getItem('token') == null)
        // return new Observable<any>();

        
        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json'
         });

        let json = JSON.parse(JSON.stringify(user));
        return this.http
        .post("http://localhost:8080/api/login/registrationMessage", json, {headers:headers})
        .catch((err:HttpErrorResponse) =>
        {
            alert(err.status + "Registration failed.");
            return Observable.throw(err);
        }); 
        
    }

 } 