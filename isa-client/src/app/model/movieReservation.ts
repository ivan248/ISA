export class MovieReservation
{
    
    public movieName : String;
    public date : Date;
    public time : String;
    public place : String;
    public price: number;
    public seatsTaken : any[];
    public projectionId : number;
    public invitedFriends : any[];



    constructor(
        projectionId : number,
        movieName : String,
        date : Date,
        time : String,
        place : String,
        price : number ) {

        this.projectionId = projectionId;
        this.movieName = movieName;
        this.date = date;
        this.time = time;
        this.place = place;
        this.price = price;
    }



 }