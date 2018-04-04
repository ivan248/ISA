import { Injectable  } from '@angular/core';  
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';


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
 export class HomeService {  

    private url : string = "http://localhost:8080/api/home/test";

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
        return this.http.get("http://localhost:8080/api/home/getTheatres", httpOptions);
    }

    getCinemas(){
        
        return this.http
        .get("http://localhost:8080/api/home/getCinemas", httpOptions)
        .map(data => data)
        .catch((err:HttpErrorResponse) =>
        {
            alert(err.status + " " + err.error.error + " \n" + err.error.message);
            return Observable.throw(err);
        }
    );
    }

  

 } 