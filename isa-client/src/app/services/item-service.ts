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
    

 } 