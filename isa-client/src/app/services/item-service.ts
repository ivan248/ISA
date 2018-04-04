import { Injectable  } from '@angular/core'; 
import { Http, Response } from '@angular/http';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http' ;
import 'rxjs/Rx';


 @Injectable()
 export class ItemService {  

    constructor(private http:HttpClient) {

    }

    deleteItem(id: any){ //posto je GET ne treba headers jer ne saljem nista, dovoljni su param
        let params = new HttpParams().append('id',id);
        
        
        return this.http.get('http://localhost:8080/fanzone/deleteitem',{
            params: params
        }).subscribe(data =>console.log(data));

    }

    approveItem(id: any){ //posto je GET ne treba headers jer ne saljem nista, dovoljni su param
        let params = new HttpParams().append('id',id);
        
        
        return this.http.get('http://localhost:8080/item/approve',{
            params: params
        }).subscribe(data =>console.log(data));

    }

    getItem(id: any){
        let params = new HttpParams().append('id',id);
        
        
        return this.http.get('http://localhost:8080/fanzone/getitem',{
            params: params
        });

    }

    sendEdditedItem(item : any){
        const body = JSON.parse(JSON.stringify(item));
        const headers = new HttpHeaders();
        headers.append('Content-type','application/json');
        console.log(body);

        return this.http.post('http://localhost:8080/item/edit',body,{
            headers: headers
        } );

    }

    changeCurrentBid(bid: any,id: any){
        let params = new HttpParams();
        params.append('bid',bid);
        params.append('id',id);
        console.log(params);
        const body = JSON.parse(JSON.stringify(bid));
        
        return this.http.post('http://localhost:8080/item/bid',body,{
            params: params
        }).subscribe(data =>console.log(data));
    }
    

 } 