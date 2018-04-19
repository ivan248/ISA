import { Injectable,   } from '@angular/core'; 
import { Http, Response,  } from '@angular/http';
import { HttpHeaders, HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http' ;
import 'rxjs/Rx';
import { BidDTO } from '../model/bidDTO';
import { Item } from '../model/item';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';



 @Injectable()
 export class ItemService {  

    constructor(private http:HttpClient,private router: Router) {

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

    approveItem(item: any){ 
        let body = JSON.parse(JSON.stringify(item));
        console.log(body);
        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });
        console.log("USAO U APPROVE ITEM")

        return this.http.post('http://localhost:8080/item/approve',body,{headers: headers})
        .catch((err:HttpErrorResponse) =>
        {
            alert(err.status + "This item has changed meanwhile.Please refresh your page");
            
            return Observable.throw(err);
        }); ;

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
        

        return this.http.post('http://localhost:8080/item/edit',body,{headers: headers})
        .catch((err:HttpErrorResponse) =>
        {
            alert(err.status + "This item has changed meanwhile.Please refresh your page");
            this.router.navigateByUrl('/fanzone');
            return Observable.throw(err);
        }); ;;
        

    }

    changeCurrentBid(bid: any,id: any,version: any){
        
        const body = JSON.stringify(new BidDTO(id,bid));
        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });
        return this.http.post('http://localhost:8080/item/bid',body,{headers: headers});
    }
    
    checkIfOk(item: Item){
        
        const body = JSON.stringify(item);
        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });
         
        return this.http.post('http://localhost:8080/item/checkifok',body,{headers: headers}).catch((err:HttpErrorResponse) =>
        {
            alert(err.status + "You are not allowed to edit this item");
            this.router.navigateByUrl('/fanzone')
            return Observable.throw(err);
        });;

    }

 } 