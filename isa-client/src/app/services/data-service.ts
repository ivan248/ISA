import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Item } from '../model/item'
import { Subject } from 'rxjs/Subject';

export class DataService {

  private edditedItem = new BehaviorSubject<Item>(new Item(new Object()));
  currentEdditedItem = this.edditedItem.asObservable();

  private itemListForShow = new BehaviorSubject<Item[]>(new Array<Item>());
  currentItemListForShow = this.itemListForShow.asObservable();

  private unapproveditemListForShow = new BehaviorSubject<Item[]>(new Array<Item>());
  currentUnapprovedItemListForShow = this.unapproveditemListForShow.asObservable();

  private selectedItem = new BehaviorSubject<Item>(new Item(new Object()));
  currentSelectedItem = this.selectedItem.asObservable();

  private typeOfItemForShow:  Subject<boolean> = new BehaviorSubject<boolean>(null);
  currentTypeOfItemForShow = this.typeOfItemForShow;
  
  constructor() { }
  
  changeEdditedItem(item: Item) {
    this.edditedItem.next(item);
  }

  changeItemListForShow(itemListForShow: Item[]){
    this.itemListForShow.next(itemListForShow);
  }

  changeUnapprovedItemListForShow(unapprovedItemListForShow: Item[]){
    this.unapproveditemListForShow.next(unapprovedItemListForShow);
  }

  changeSelectedItem(item: Item) {
    console.log("SETOVANEJ: ");
    console.log(item);
    this.selectedItem.next(item);
  }

  changeTypeOfItemForShow(preowned: boolean){
    this.currentTypeOfItemForShow.next(preowned);
    console.log("Stiglo: ");
    console.log(preowned);
    console.log("currentType:");
    console.log(this.currentTypeOfItemForShow);
  }
  
  }