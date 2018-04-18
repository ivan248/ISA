import { Injectable  } from '@angular/core';  
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { HttpHeaders, HttpClient, HttpErrorResponse, HttpParams  } from '@angular/common/http';
import { MovieReservation } from '../model/movieReservation';
 
 @Injectable()
 export class CinemasService {  


    private url : string = "http://localhost:8080/api/cinemas/test";
    private selectedCinema: any;

    private c = new BehaviorSubject<any>(new Object(new Object()));
    currentc = this.c.asObservable();

    private m = new BehaviorSubject<any>(new Object(new Object()));
    currentm = this.m.asObservable();

    private cList= new BehaviorSubject<any[]>(new Array<any>());
    currentcList = this.cList.asObservable();

    private initBrojprivate = new BehaviorSubject<any>(new Object(new Object()));
    initBroj: any = this.initBrojprivate.asObservable();

    constructor(private http:HttpClient) {

    }

    getCinemas(){

        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });

        return this.http.get("http://localhost:8080/api/home/getCinemas", {headers:headers}).map(data => data)
        .catch((err:HttpErrorResponse) =>
        {
            alert(err.status + " " + err.error.error + " \n" + err.error.message);
            return Observable.throw(err);
        });

       
    }

    selectCinema(cinema: any) {
        this.c.next(cinema);
        this.initBrojprivate.next(cinema.projekcije.length);
      }
      
    selectMovie(movie: any) {
        this.m.next(movie);
      }
    
    selectedList(cinemaList: any[]){
        this.cList.next(cinemaList);
      }

    getMovies(cinemaId: any) {
  
        let params = new HttpParams().append('cinema',cinemaId);
        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });

        return this.http
        .get("http://localhost:8080/api/home/getMovies", {params:params,headers:headers})
        .map((data:[any]) => data);
    }

   deleteMovie(movieId: any, cinemaId: any) {
    let params = new HttpParams().set('movieid',movieId);    
    params = params.set('cinemaid',cinemaId); 

    let headers = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'X-Auth-Token' : localStorage.getItem('token')
     });

    return this.http
    .delete("http://localhost:8080/api/home/deleteMovie", {params:params,headers:headers})
    .map((data:[any]) => data);

   }

   deleteProjection(movieid: any, projekcijaid:any, cinemaid: any) {
    let params = new HttpParams().set('movieid',movieid); 
    params = params.set('projekcijaid',projekcijaid);   
    params = params.set('cinemaid',cinemaid); 

    let headers = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'X-Auth-Token' : localStorage.getItem('token')
     });

    return this.http
    .delete("http://localhost:8080/api/home/deleteProjection", {params:params,headers:headers})
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
        return this.http.post('http://localhost:8080/api/home/addProjection',body,{
            params:params,
            headers: headers
        } );



    }

    getProjectionById(id:number) {
        let params = new HttpParams().set('projectionId', id.toString());  

        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
        });
        return this.http
        .get("http://localhost:8080/api/home/getProjectionById", {params:params,headers:headers})
        .map((data:[any]) => data);

    }

    getNotFastProjectionsByCinemaId(cinemaid: any){
        let params = new HttpParams().set('cinemaid', cinemaid);  

        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
        });
        return this.http
        .get("http://localhost:8080/api/home/getFastProjectionTicketsCinema", {params:params,headers:headers})
        .map((data:[any]) => data);
    }

    addToFast(cinemaid: any, ticketid:any, ticket: any){
        ticket.fastRes = true;
        const body = JSON.parse(JSON.stringify(ticket));
        let params = new HttpParams().set('cinemaid',cinemaid);  
        params = params.set('ticketid',ticketid); 

        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
        });
        return this.http.post('http://localhost:8080/api/home/addProjectionToFast',body,{
            params:params,
            headers: headers
        } );



    }
        

makeCinemaReservation(movieReservation : MovieReservation) {
    
    let headers = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'X-Auth-Token' : localStorage.getItem('token')
     });

    return this.http
    .post('http://localhost:8080/api/home/makeCinemaReservation',
     movieReservation,
      {headers:headers}
       );
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

    deleteSeats(projection: any, projectionid: any, seat: any) {
        let params = new HttpParams().set('seat', seat);  
        console.log(seat);
        const body = JSON.parse(JSON.stringify(projection));

        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
        });
        return this.http
        .post("http://localhost:8080/api/home/deleteSeats", body, {params:params,headers:headers});

    }

    addFastTicket(price: any, seat: any, mid: any, p: any, cid: any ){

        let params = new HttpParams().set('seat', seat); 
        params = params.set('cid',cid);
        params = params.set('mid',mid);
        params = params.set('price',price);
        const body = JSON.parse(JSON.stringify(p));

        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
        });
        return this.http
        .post("http://localhost:8080/api/home/addFastTicket", body, {params:params,headers:headers});

    }

    deleteFast(ticket:any, ticketid: any){
        
        ticket.sold=true;
        const body = JSON.parse(JSON.stringify(ticket));
        let params = new HttpParams().set('ticketid',ticketid); 
        

        let headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
        });
        return this.http.post('http://localhost:8080/api/home/deleteFast',body,{
            params:params,
            headers: headers
        } );

    }

    searchCinemas(cinema : string) {
        
        let params = new HttpParams().set('cinema', cinema.toString());
     
        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });


        return this.http
        .get("http://localhost:8080/api/home/searchCinemas",
         {params:params, headers:headers});

      }

      getProjectionDate(movieId : any) {

        let params = new HttpParams().set('movieId', movieId.toString());
     
        var headers = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'X-Auth-Token' : localStorage.getItem('token')
         });


        return this.http
        .get("http://localhost:8080/api/home/getMovieDates",
         {params:params, headers:headers})
         .map((data:[any]) => data);

      }



  

 } 