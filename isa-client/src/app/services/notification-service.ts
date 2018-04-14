import { Injectable  } from '@angular/core'; 
import { Http, Response } from '@angular/http';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http' ;
import 'rxjs/Rx';





    

 @Injectable()
 export class NotificationService {  

    constructor(private http:HttpClient) {

    }

    getAllNotifications(){
        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });
        
        
        return this.http.get('http://localhost:8080/api/profile/getnotifications',{ headers: headers});
    }

    readNotification(id: any){
        let body = JSON.stringify(id);
        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });
        
        let params = new HttpParams().append('id',id);

        return this.http.post('http://localhost:8080/api/profile/readnotification',body,{ headers: headers,params:params})
    }
 } 