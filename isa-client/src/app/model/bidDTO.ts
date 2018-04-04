import { Item } from "./item";

export class BidDTO
{
    public bidvalue : number;
    public item : Item;



    constructor(item: Item, bidvalue: number) {
        this.item = item;
        
        this.bidvalue = bidvalue;

    }



 }