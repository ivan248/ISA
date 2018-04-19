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

        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
        });
        return this.http
        .get("http://localhost:8080/api/theatres/getFastProjectionTicketsTheatre", {headers:headers,params:params})
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

    deleteProjection(movieid: any, projekcijaid:any, theatreid: any) {
        let params = new HttpParams().set('movieid',movieid); 
        params = params.set('projekcijaid',projekcijaid);   
        params = params.set('theatreid',theatreid); 
    
        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });
    
        return this.http
        .delete("http://localhost:8080/api/theatres/deleteProjection", {params:params,headers:headers})
        .map((data:[any]) => data);
    
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
        } ).map((data:[any]) => data);

    }
    addToFast(theatreid: any, ticketid:any, ticket: any){
        ticket.fastRes = true;
        const body = JSON.parse(JSON.stringify(ticket));
        let params = new HttpParams().set('theatreid',theatreid);  
        params = params.set('ticketid',ticketid); 

        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
        });
        return this.http.post('http://localhost:8080/api/theatres/addProjectionToFast',body,{
            params:params,
            headers: headers
        } );



    }

    addProjection(projekcija: any, movie: any, cinema: any){
        const body = JSON.parse(JSON.stringify(projekcija));
        var movieid = movie.id;
        var cinemaid = cinema.id;
        let params = new HttpParams().set('movieid',movieid);  
        params = params.set('cinemaid',cinemaid); 

        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
        });
        return this.http.post('http://localhost:8080/api/theatres/addProjectionTheatre',body,{
            params:params,
            headers: headers
        } );
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

 } 