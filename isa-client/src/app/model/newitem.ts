export class NewItem
{
    public itemID : number;
    public name : String;
    public description : String;
    public price : number;
    public beginDate: Date;
    public reserved : boolean;
    public sold: boolean;
    public buyer: any;
    public cinema: any;
    public theatre: any;

 



    constructor(obj: any) {
        this.itemID = obj.itemID;
        this.name  = obj.name;
        this.description = obj.description;
        this.price = obj.price;
        this.beginDate= obj.beginDate;
        
        this.reserved = obj.reserved;
        this.buyer = obj.buyer;
        this.cinema = obj.cinema;
        this.sold= obj.sold
        this.theatre = obj.theatre;

    }



 }