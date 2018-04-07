import { Injectable  } from '@angular/core';  
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
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

    getFriends() {
        return this.http
        .get(this.url+"getFriends", httpOptions)
        .map((data:[any]) => data);
    }

    removeFriend(id : any) {

        let params = new HttpParams().append('friendId',id);
        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         })

        return this.http
        .get(this.url + "removeFriend", {params:params,headers:headers})
        .map((data:[any]) => data);
    }

    getAllUsers() {
        return this.http
        .get(this.url + "getAllUsers", httpOptions)
        .map((data:[any]) => data);       
    }


 } 