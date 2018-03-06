import { Injectable  } from '@angular/core';  
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

 
 @Injectable()
 export class LoginService {  

    private url : string = "http://localhost:8080/login/test";

    constructor(private http:Http) {

    }

    getLogin(): Observable<any> { 


       let vraceno  = ""; 
       this.http.post(this.url, "data").map(data => console.log(data));   

       return this.http.post(this.url, "data").map(data => console.log(data)); 
    } 

 } 