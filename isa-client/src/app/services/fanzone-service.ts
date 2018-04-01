import { Injectable  } from '@angular/core'; 
import { Http, Response } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http' ;
import 'rxjs/Rx';


 @Injectable()
 export class FanzoneService {  

    constructor(private http:HttpClient) {

    }

    getApprovedItems(){

        return this.http.get("http://localhost:8080/fanzone/");
    }
    

 } 