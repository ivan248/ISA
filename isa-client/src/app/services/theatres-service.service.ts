import { Injectable  } from '@angular/core';  
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { HttpHeaders, HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { MovieReservation } from '../model/movieReservation';

  
 
 @Injectable()
 export class TheatresService {  


    private url : string = "http://localhost:8080/api/theatres/test";
    private selectedTheatre: any;

    private th = new BehaviorSubject<any>(new Object(new Object()));
    currentth = this.th.asObservable();

    private p = new BehaviorSubject<any>(new Object(new Object()));
    currentp = this.p.asObservable();

    private initBrojprivate = new BehaviorSubject<any>(new Object(new Object()));
    initBroj: any = this.initBrojprivate.asObservable()

    constructor(private http:HttpClient) {

    }

    getTheatres(){

        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });

        return this.http.get("http://localhost:8080/api/home/getTheatres", {headers:headers}).map(data => data)
        .catch((err:HttpErrorResponse) =>
        {
            alert(err.status + " " + err.error.error + " \n" + err.error.message);
            return Observable.throw(err);
        });;
    }

    selectTheatre(theatre: any) {
        this.th.next(theatre);
        this.initBrojprivate.next(theatre.projekcije.length);
      }

    searchTheatres(theatre : String) {
       
        let params = new HttpParams().set('theatre', theatre.toString());
     
        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });


        return this.http
        .get("http://localhost:8080/api/home/searchTheatres",
         {params:params, headers:headers});
 
    }

    getPlays(theatreId : any) {

        let params = new HttpParams().set('theatreId', theatreId.toString());
     
        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });


        return this.http
        .get("http://localhost:8080/api/home/getPlays",
         {params:params, headers:headers}).map((data:[any]) => data);

    }

    getAllPlays(theatreId : any) {

        let params = new HttpParams().set('theatreId', theatreId.toString());
     
        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });


        return this.http
        .get("http://localhost:8080/api/home/getAllPlays",
         {params:params, headers:headers}).map((data:[any]) => data);

    }


    getProjectionDate(playId : any) {

        let params = new HttpParams().set('playId', playId.toString());
     
        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });


        return this.http
        .get("http://localhost:8080/api/home/getPlayDates",
         {params:params, headers:headers})
         .map((data:[any]) => data);
    }

    getNotFastProjectionsByTheatreId(theatreid: any){
        let params = new HttpParams().set('theatreid', theatreid);  

        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });
        return this.http
        .get("http://localhost:8080/api/theatres/getFastProjectionTicketsTheatre",
         {params:params,headers:headers})
        .map((data:[any]) => data);
    }

    selectPlay(play: any) {
        console.log(play);
        this.p.next(play);
      }

  
    makeTheatreReservation(movieReservation: any) {
        
        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });

        return this.http
        .post('http://localhost:8080/api/home/makeTheatreReservation',
        movieReservation, {headers:headers})
        .catch((err:HttpErrorResponse) =>
        {
            alert(err.status + "GDE SI POSAO? TRANSACTINAL SAM JA I TO SVAKO ZNA!");
            return Observable.throw(err);
        });


    }

    sendFriendTheatreInvitation(movieReservation : MovieReservation, friendId : any) {

        let params = new HttpParams().set('friendId', friendId.toString());

        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });

        return this.http
        .post('http://localhost:8080/api/home/sendFriendTheatreInvitation',
        movieReservation,
        {headers:headers, params:params}
    );
    }

    getTheatre(id: any){
        let params = new HttpParams().append('id',id);

        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });

        return this.http.get('http://localhost:8080/api/home/gettheatre',{headers:headers, params:params});
    
    }

    deleteProjection(playid: any, projekcijaid:any, theatreid: any) {
        let params = new HttpParams().set('playid',playid); 
        params = params.set('projekcijaid',projekcijaid);   
        params = params.set('theatreid',theatreid); 
    
        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });
    
        return this.http
        .delete("http://localhost:8080/api/home/deleteProjectionTheatre", {params:params,headers:headers})
        .map((data:[any]) => data).catch((err:HttpErrorResponse) =>
        {
            alert(err.status + " Forbidden!");
            return Observable.throw(err);
        });;;
    
       }

       sendEdditedProjection(projekcija : any, id: number){
        projekcija.id=id;
        const body = JSON.parse(JSON.stringify(projekcija));
        
        console.log("sendeditedprojection"+body.price);

        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
        });
        return this.http.post('http://localhost:8080/api/home/editProjection',body,{
            headers: headers
        } ).map((data:[any]) => data).catch((err:HttpErrorResponse) =>
        {
            alert(err.status + " Forbidden!");
            return Observable.throw(err);
        });;

    }
    addFastTicket(price: any, seat: any, plid: any, p: any, tid: any ){

        let params = new HttpParams().set('seat', seat); 
        params = params.set('tid',tid);
        params = params.set('plid',plid);
        params = params.set('price',price);
        const body = JSON.parse(JSON.stringify(p));

        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
        });
        return this.http
        .post("http://localhost:8080/api/theatres/addFastTicket", body, {params:params,headers:headers})
        .catch((err:HttpErrorResponse) =>
        {
            alert(err.status + " Forbidden!");
            return Observable.throw(err);
        });;;

    }
    addProjection(projekcija: any, movie: any, cinema: any){
        const body = JSON.parse(JSON.stringify(projekcija));
        var playid = movie.id;
        var theatreid = cinema.id;
        let params = new HttpParams().set('playid',playid);  
        params = params.set('theatreid',theatreid); 

        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
        });
        return this.http.post('http://localhost:8080/api/home/addProjectionTheatre',body,{
            params:params,
            headers: headers
        } ).catch((err:HttpErrorResponse) =>
        {
            alert(err.status + " Data is not correct or you do not have the permission for action!");
            return Observable.throw(err);
        });;
    }

    reserveFast(ticket:any, ticketid: any){
        
        ticket.sold=true;
        const body = JSON.parse(JSON.stringify(ticket));
        let params = new HttpParams().set('ticketid',ticketid); 
        

        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
        });
        return this.http.post('http://localhost:8080/api/home/reserveFast',body,{
            params:params,
            headers: headers
        } );

    }

    deleteFast(ticket:any, ticketid: any){
        
        ticket.sold=true;
        const body = JSON.parse(JSON.stringify(ticket));
        let params = new HttpParams().set('ticketid',ticketid); 
        

        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
        });
        return this.http.post('http://localhost:8080/api/home/deleteFastTheatre',body,{
            params:params,
            headers: headers
        } ).catch((err:HttpErrorResponse) =>
        {
            alert(err.status + " Forbidden!");
            return Observable.throw(err);
        });;;

    }

 } 