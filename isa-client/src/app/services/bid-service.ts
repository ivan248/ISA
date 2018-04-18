import { Injectable  } from '@angular/core'; 
import { Http, Response } from '@angular/http';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http' ;
import 'rxjs/Rx';
import { BidDTO } from '../model/bidDTO';
import { Item } from '../model/item';



    

 @Injectable()
 export class BidService {  

    constructor(private http:HttpClient) {

    }

    sendNewBid(bid : BidDTO){
        const body = JSON.parse(JSON.stringify(bid));
        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });

        return this.http.post('http://localhost:8080/bid/add',body,{ headers: headers});

    }

    getAllByItem(item: Item){
        const body = JSON.parse(JSON.stringify(item));
        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });

        return this.http.post('http://localhost:8080/bid/getallbyitem',body,{ headers: headers});
    }

    acceptBid(bid : any){
        const body = JSON.parse(JSON.stringify(bid));
        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });

        return this.http.post('http://localhost:8080/bid/accept',body,{ headers: headers});
    }

    getBid(item: Item){
        const body = JSON.parse(JSON.stringify(item));
        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });
        return this.http.post('http://localhost:8080/bid/getbid',body,{ headers: headers});
    }

    changeBidValue(value: any){
        const body = JSON.parse(JSON.stringify(value));
        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });
        let params = new HttpParams().append('value',value);
        return this.http.post('http://localhost:8080/bid/changevalue',body,{ params:params,headers: headers});


    }

    getAllByUser(){
        
        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });
        
        return this.http.get('http://localhost:8080/bid/getallbyuser',{ headers: headers});
    }

 } 