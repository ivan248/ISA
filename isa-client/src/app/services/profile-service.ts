import { Injectable  } from '@angular/core';  
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from '../model/dto/userDTO';

const httpOptions = {
    headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'X-Auth-Token' : localStorage.getItem('token')
     }),
};

 @Injectable()
 export class ProfileService {  

    private url : string = "http://localhost:8080/api/profile/";

    constructor(private http:HttpClient) {

    }

    getLoggedUser(): Observable<any> {
        return this.http.get(this.url, httpOptions).map((data:Observable<any>) => data); 
    }

    editUser(user : User) {
        console.log("ispis iz profile servisa token : \n" + localStorage.getItem('token'));
        console.log(httpOptions);
        return this.http.post(this.url + "editUser", user, httpOptions);
    }


 } 