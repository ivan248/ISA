import { Injectable  } from '@angular/core'; 
import { Http, Response } from '@angular/http';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http' ;
import 'rxjs/Rx';
import { BidDTO } from '../model/bidDTO';




 @Injectable()
 export class ItemService {  

    constructor(private http:HttpClient) {

    }

    deleteItem(id: any){ //posto je GET ne treba headers jer ne saljem nista, dovoljni su param
        let params = new HttpParams().append('id',id);
        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });
        
        return this.http.get('http://localhost:8080/fanzone/deleteitem',{
            params: params,  headers: headers
        }).subscribe(data =>console.log(data));

    }

    approveItem(id: any){ //posto je GET ne treba headers jer ne saljem nista, dovoljni su param
        let params = new HttpParams().append('id',id);
        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });
        

        return this.http.get('http://localhost:8080/item/approve',{
            params: params, headers: headers
        }).subscribe(data =>console.log(data));

    }

    getItem(id: any){
        let params = new HttpParams().append('id',id);
        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });
        
        return this.http.get('http://localhost:8080/fanzone/getitem',{
            params: params, headers: headers
        });

    }

    sendEdditedItem(item : any){
        const body = JSON.parse(JSON.stringify(item));
        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });
        

        return this.http.post('http://localhost:8080/item/edit',body,{
            headers: headers
        } );

    }

    changeCurrentBid(bid: any,id: any){
        const body = JSON.stringify(new BidDTO(id,bid));
        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });

        return this.http.post('http://localhost:8080/item/bid',body,{headers: headers}).subscribe();
    }
    

 } 