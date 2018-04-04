import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Item } from '../model/item'

export class DataService {

  private edditedItem = new BehaviorSubject<Item>(new Item(new Object()));
  currentEdditedItem = this.edditedItem.asObservable();

  private itemListForShow = new BehaviorSubject<Item[]>(new Array<Item>());
  currentItemListForShow = this.itemListForShow.asObservable();
  
  constructor() { }
  
  changeEdditedItem(item: Item) {
    this.edditedItem.next(item);
  }

  changeItemListForShow(itemListForShow: Item[]){
    this.itemListForShow.next(itemListForShow);
  }
  
  }