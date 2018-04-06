import { Injectable  } from '@angular/core'; 
import { Http, Response } from '@angular/http';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http' ;
import 'rxjs/Rx';

const headers = new HttpHeaders({ 
    'Content-Type': 'application/json',
    'X-Auth-Token' : localStorage.getItem('token')
 });

 @Injectable()
 export class FanzoneService {  

    constructor(private http:HttpClient) {

    }

    getApprovedItems(){

        return this.http.get("http://localhost:8080/fanzone/",{ headers: headers});
    }

    getUnApprovedItems(){
        return this.http.get("http://localhost:8080/fanzone/unapproved",{ headers: headers});
    }

    getNewItems(){

        return this.http.get("http://localhost:8080/fanzone/new",{ headers: headers});
    }
    

    sendNewItem(item : any){
        const body = JSON.parse(JSON.stringify(item));
        console.log("SALJE ITEM");
        return this.http.post('http://localhost:8080/fanzone/additem',body,{ headers: headers});

    }

   
    

 } 