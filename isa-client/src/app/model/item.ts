export class Item
{
    public itemID : number;
    public name : String;
    public description : String;
    public currentBid : number;
    public beginDate: Date;
    public endDate : Date;
    public owner : any;
    public buyer : any;
    public approved : boolean;
    public sold: boolean;
    public someoneBid : boolean;
    public version: number;


    constructor(obj: any) {
        this.itemID = obj.itemID;
        this.name  = obj.name;
        this.description = obj.description;
        this.currentBid = obj.currentBid;
        this.beginDate= obj.beginDate;
        this.endDate = obj.endDate;
        this.owner = obj.owner;
        this.buyer = obj.buyer;
        this.approved = obj.approved;
        this.sold= obj.sold
        this.someoneBid = obj.someoneBid;
        this.version = obj.version;

    }



 }