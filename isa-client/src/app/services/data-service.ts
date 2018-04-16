import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Item } from '../model/item'
import { NewItem } from '../model/newitem'
import { Subject } from 'rxjs/Subject';
import { MovieReservation } from '../model/movieReservation';

import * as jwt_decode from "jwt-decode";

export class DataService {

  private edditedItem = new BehaviorSubject<Item>(new Item(new Object()));
  currentEdditedItem = this.edditedItem.asObservable();

  private preownedItemListForShow = new BehaviorSubject<Item[]>(new Array<Item>());
  currentPreownedItemListForShow = this.preownedItemListForShow.asObservable();

  private newItemListForShow = new BehaviorSubject<Item[]>(new Array<Item>());
  currentNewItemListForShow = this.newItemListForShow.asObservable();

  private unapproveditemListForShow = new BehaviorSubject<Item[]>(new Array<Item>());
  currentUnapprovedItemListForShow = this.unapproveditemListForShow.asObservable();

  private selectedItem = new BehaviorSubject<Item>(new Item(new Object()));
  currentSelectedItem = this.selectedItem.asObservable();

  private selectedNewItem = new BehaviorSubject<NewItem>(new NewItem(new Object()));
  currentSelectedNewItem = this.selectedNewItem.asObservable();

  private preowned:  Subject<boolean> = new BehaviorSubject<boolean>(null);
  currentTypeOfItemForShow = this.preowned;

  private address: Subject<string> = new BehaviorSubject<string>(null);
  currentAddress = this.address;

  private loginJWT:  Subject<String> = new BehaviorSubject<String>(null);
  currentloginJWT = this.loginJWT;

  private movieReservation:  Subject<MovieReservation> = new BehaviorSubject<MovieReservation>(null);
  currentMovieReservation = this.movieReservation.asObservable();

  

  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }
  
  constructor() { }
  
  changeEdditedItem(item: Item) {
    this.edditedItem.next(item);
  }

  changePreownedItemListForShow(itemListForShow: Item[]){
    this.preownedItemListForShow.next(itemListForShow);
  }
  changeNewItemListForShow(itemListForShow: Item[]){
    this.newItemListForShow.next(itemListForShow);
  }

  changeUnapprovedItemListForShow(unapprovedItemListForShow: Item[]){
    this.unapproveditemListForShow.next(unapprovedItemListForShow);
  }

  changeSelectedItem(item: Item) {
    
    this.selectedItem.next(item);
  }

  changeSelectedNewItem(item: NewItem) {
    
    this.selectedNewItem.next(item);
  }

  changeTypeOfItemForShow(preowned: boolean){
    this.preowned.next(preowned);
    
  }

  changeAddress(address:string){
    this.address.next(address);
  }


  changeLoginJWT(jwt : String) {
    this.loginJWT.next(jwt);
  }

  
  changeMovieReservation(movieRes : MovieReservation) {
    this.movieReservation.next(movieRes);
  }

 
  
  }