import { Injectable  } from '@angular/core'; 
import { Http, Response } from '@angular/http';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http' ;
import 'rxjs/Rx';

const httpOptions = {
    headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'X-Auth-Token' : localStorage.getItem('token')
     }),
};

 @Injectable()
 export class FanzoneService {  

    constructor(private http:HttpClient) {

    }

    getApprovedItems(){

        return this.http.get("http://localhost:8080/fanzone/");
    }

    getUnApprovedItems(){
        return this.http.get("http://localhost:8080/fanzone/unapproved");
    }

    

    sendNewItem(item : any){
        const body = JSON.parse(JSON.stringify(item));
        const headers = new HttpHeaders();
        headers.append('Content-type','application/json');
        console.log(body);

        return this.http.post('http://localhost:8080/fanzone/additem',body,httpOptions);

    }

   
    

 } 