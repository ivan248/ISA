import { Injectable  } from '@angular/core'; 
import { Http, Response } from '@angular/http';
import { HttpHeaders, HttpClient, HttpParams,HttpErrorResponse} from '@angular/common/http' ;
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';




 @Injectable()
 export class NewItemService {  

    constructor(private http:HttpClient,private router: Router) {

    }

    deleteItem(id: any){ //posto je GET ne treba headers jer ne saljem nista, dovoljni su param
        let params = new HttpParams().append('id',id);
        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });
        
        return this.http.delete('http://localhost:8080/fanzone/deleteofficialitem',{
            params: params,  headers: headers
        }).catch((err:HttpErrorResponse) =>
        {
            alert(err.status + "Unauthorized");
            this.router.navigateByUrl('/fanzone')
            return Observable.throw(err);
        });

    }

    

    getItem(id: any){
        let params = new HttpParams().append('id',id);
        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });
        
        return this.http.get('http://localhost:8080/fanzone/getofficialitem',{
            params: params, headers: headers
        });

    }

    sendEdditedItem(item : any){
        const body = JSON.parse(JSON.stringify(item));
        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });
        

        return this.http.post('http://localhost:8080/officialitem/edit',body,{
            headers: headers
        } ).catch((err:HttpErrorResponse) =>
        {
            alert(err.status + "This item has changed meanwhile.Please refresh your page");
            this.router.navigateByUrl('/fanzone')
            return Observable.throw(err);
        }); ;

    }

    reserveItem(item: any){
        const body = JSON.parse(JSON.stringify(item));
        
        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });

        return this.http.post('http://localhost:8080/officialitem/reserve',body,{
            headers: headers
        } ).catch((err:HttpErrorResponse) =>
        {
            alert(err.status + "This item has changed meanwhile.Please refresh your page");
            this.router.navigateByUrl('/fanzone')
            return Observable.throw(err);
        });;
    }

    
    

 } 