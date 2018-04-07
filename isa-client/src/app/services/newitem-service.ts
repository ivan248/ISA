import { Injectable  } from '@angular/core'; 
import { Http, Response } from '@angular/http';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http' ;
import 'rxjs/Rx';



const headers = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'X-Auth-Token' : localStorage.getItem('token')
     });

 @Injectable()
 export class NewItemService {  

    constructor(private http:HttpClient) {

    }

    deleteItem(id: any){ //posto je GET ne treba headers jer ne saljem nista, dovoljni su param
        let params = new HttpParams().append('id',id);
        
        
        return this.http.delete('http://localhost:8080/fanzone/deleteofficialitem',{
            params: params,  headers: headers
        }).subscribe(data =>console.log(data));

    }

    

    getItem(id: any){
        let params = new HttpParams().append('id',id);
        
        
        return this.http.get('http://localhost:8080/fanzone/getofficialitem',{
            params: params, headers: headers
        });

    }

    sendEdditedItem(item : any){
        const body = JSON.parse(JSON.stringify(item));
        
        

        return this.http.post('http://localhost:8080/officialitem/edit',body,{
            headers: headers
        } );

    }

    
    

 } 