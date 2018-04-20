import { Injectable  } from '@angular/core'; 
import { Http, Response } from '@angular/http';
import { HttpHeaders, HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http' ;
import 'rxjs/Rx';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

 @Injectable()
 export class FanzoneService {  

    constructor(private http:HttpClient, private router: Router) {

    }

    getApprovedItems(){
        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });

        return this.http.get("http://localhost:8080/fanzone/",{ headers: headers});
    }

    getUnApprovedItems(){
        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });
        return this.http.get("http://localhost:8080/fanzone/unapproved",{ headers: headers});
    }

    getNewItems(){
        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });
        return this.http.get("http://localhost:8080/fanzone/new",{ headers: headers});
    }
    

    sendNewItem(item : any){
        const body = JSON.parse(JSON.stringify(item));
        
        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });
        return this.http.post('http://localhost:8080/fanzone/additem',body,{ headers: headers});

    }

    sendNewNewItem(item : any){
        const body = JSON.parse(JSON.stringify(item));
        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });
        return this.http.post('http://localhost:8080/fanzone/addofficialitem',body,{ headers: headers}).catch((err:HttpErrorResponse)=>{
         alert("Unauthorized");
         this.router.navigateByUrl('/fanzone');
         return Observable.throw(err);
    });


       
    }

    checkIfOk(){
        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });
        return this.http.get('http://localhost:8080/fanzone/checkIfPendingAvialable',{ headers: headers}).catch((err:HttpErrorResponse) =>
        {
            alert(err.status + "You are not allowed to see pending items");
            this.router.navigateByUrl('/fanzone')
            return Observable.throw(err);
        });;
    }

   
    

 } 