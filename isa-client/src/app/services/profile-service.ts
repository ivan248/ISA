import { Injectable  } from '@angular/core';  
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../model/dto/userDTO';
import { ProjectionUserTicketId } from '../model/ProjectionUserTicketId';

var httpOptions = {
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


        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });

        return this.http.get(this.url, {headers:headers}).map((data:Observable<any>) => data); 
    }

    editUser(user : User) {
        console.log("ispis iz profile servisa token : \n" + localStorage.getItem('token'));
        console.log(httpOptions);

        
        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });

        return this.http.post(this.url + "editUser", user, {headers:headers});
    }

    getFriends() {

        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });

        return this.http
        .get(this.url+"getFriends", {headers:headers})
        .map((data:[any]) => data);
    }

    removeFriend(id : any) {

        let params = new HttpParams().append('friendId',id);
        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });

        return this.http
        .get(this.url + "removeFriend", {params:params,headers:headers})
        .map((data:[any]) => data);
    }

    getAllUsers() {

        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });

        return this.http
        .get(this.url + "getAllUsers", {headers:headers})
        .map((data:[any]) => data);       
    }

    sendFriendRequest(username : string) {

        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });

        return this.http
        .post(this.url + "friendRequest", username, {headers:headers})
        .map((data:[any])=> data);;
    }

    getFriendRequests() {

        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });

        return this.http
        .get(this.url + "getFriendRequests", {headers:headers})
        .map((data:[any])=> data);
    }

    acceptFriend(friendId : any) {

        let params = new HttpParams().append('friendId',friendId);
        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });

        return this.http
        .get(this.url + "acceptFriend", {params:params,headers:headers}).map((data:[any]) => data);
    }

    declineFriend(friendId : any) {

        let params = new HttpParams().append('friendId',friendId);
        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });

        return this.http
        .get(this.url + "declineFriend", {params:params,headers:headers}).map((data:[any]) => data);
    }

    changePassword(password : any) {

        let params = new HttpParams().append('password', password);
        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });

        return this.http
        .get(this.url + "changePassword", {params:params,headers:headers});

    }

    searchUsers(searchName: any, searchLastName: any) {
        
        console.log(searchLastName, searchName);

        var params = new HttpParams().set('searchName', searchName);
        params = params.set('searchLastName', searchLastName);
        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });

        return this.http
        .get(this.url + "searchUsers", {params:params,headers:headers})
        .map((data:[any]) => data);

      }

      addRole(user : any,role : string){
        let body = JSON.stringify(user);
        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });
         
         let params = new HttpParams().append('role',role);
         return this.http.post('http://localhost:8080/api/profile/addrole',body,{params:params, headers: headers});
        
      }

      acceptORdeclineInvitation(projectionUserTicketId : ProjectionUserTicketId, accept : string) {

        const body = JSON.parse(JSON.stringify(projectionUserTicketId));
        
        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });

        let params = new HttpParams().append('accept',accept);

        console.log("acceptORdecline"+body.projectionId  + " ispis iz ");
        return this.http.post('http://localhost:8080/api/profile/acceptORdeclineInvitation',body,{
            headers: headers, params:params
        } );
    }

    
      getReservations(): any {
        
        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });

        return this.http
        .get(this.url + "getReservations", {headers:headers})
        .map((data:[any]) => data);
      }

      ratePlay(id: any, ratevalue: any, p: any){
        let body = JSON.stringify(p);

        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });
         
         let params = new HttpParams().set('ratevalue',ratevalue);
         return this.http.post('http://localhost:8080//api/profile/ratePlay',body,{params:params, headers: headers});
        
      }

      rateAmb(id: any, ratevalue: any, p: any){
        let body = JSON.stringify(p);

        console.log("usli"+ratevalue);
        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });
         
         let params = new HttpParams().set('ratevalue',ratevalue);
         return this.http.post('http://localhost:8080//api/profile/rateAmb',body,{params:params, headers: headers});
        
      }


 } 