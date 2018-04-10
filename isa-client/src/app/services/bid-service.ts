import { Injectable  } from '@angular/core'; 
import { Http, Response } from '@angular/http';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http' ;
import 'rxjs/Rx';
import { BidDTO } from '../model/bidDTO';
import { Item } from '../model/item';



    const headers = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'X-Auth-Token' : localStorage.getItem('token')
     });

 @Injectable()
 export class BidService {  

    constructor(private http:HttpClient) {

    }

    sendNewBid(bid : BidDTO){
        const body = JSON.parse(JSON.stringify(bid));

        return this.http.post('http://localhost:8080/bid/add',body,{ headers: headers});

    }

    getAllByItem(item: Item){
        const body = JSON.parse(JSON.stringify(item));

        return this.http.post('http://localhost:8080/bid/getallbyitem',body,{ headers: headers});
    }

    acceptBid(bid : any){
        const body = JSON.parse(JSON.stringify(bid));

        return this.http.post('http://localhost:8080/bid/accept',body,{ headers: headers});
    }

 } 