import { Component, OnInit,ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'app-location-component',
  styles: [`
  agm-map {
    height: 500px;
  }
  #inputDiv {
    border: 1px solid red;
  }
`],
  templateUrl: './location-component.component.html'
})
export class LocationComponent implements OnInit {

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  private address: string;

  @ViewChild('locationInput') 
  locationInput: ElementRef;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private dataService: DataService
  ) {}

  ngOnInit() {

    this.dataService.currentAddress.subscribe(data => {
      this.address = data;
      console.log(this.address)
    })

    //set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 13;
          let el: HTMLElement = this.locationInput.nativeElement as HTMLElement;
          console.log("Izvrsio click");
          el.click();
        });
      });
    });

    
    
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
}

  


