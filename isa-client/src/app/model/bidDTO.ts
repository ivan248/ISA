import { Item } from "./item";

export class BidDTO
{
    public bid : number;
    public item : Item;



    constructor(item: Item, bidvalue: number) {
        this.item = item;
        
        this.bid = bidvalue;

    }



 }