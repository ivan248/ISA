import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Item } from '../model/item'

export class DataService {

    private edditedItem = new BehaviorSubject<Item>(new Item(new Object()));
    currentEdditedItem = this.edditedItem.asObservable();
  
    constructor() { }
  
    changeEdditedItem(item: Item) {
      this.edditedItem.next(item);
    }
  
  }