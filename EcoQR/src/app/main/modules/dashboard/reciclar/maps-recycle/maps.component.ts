import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GoogleMap } from '@angular/google-maps';


@Component({
  selector: 'maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit, AfterViewInit {
  // googleMapType = 'map';
  // title = 'My first AGM project';
  // lat = 51.678418;
  // lng = 7.809007;
  // zoom:number = 12;
  @ViewChild(GoogleMap, { static: false }) map?: GoogleMap
   zoom = 12
   googleMapType = 'satellite';
  center!: google.maps.LatLngLiteral;
  address: string = '';
  geoCoder: any;
  latitude: any;
  longitude: any;
  myLatLng: any;
  markers: any[] = [];
  options: google.maps.MapOptions = {};
  constructor(private _formBuilder: FormBuilder) {
     this.getPosition();
  }

  ngOnInit() {
  
    this.getPosition();
    // console.log(this.latitude);

  }


  

  ngAfterViewInit() {
  /// this.setCurrentLocation();


  }


async getPosition(): Promise<any>{
  try{
    const dato = await navigator.geolocation.getCurrentPosition((position) => {
      this.addMarkerMe( position.coords.latitude,  position.coords.longitude);
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.myLatLng = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        
      }
      this.options = {
        center: this.myLatLng,
        maxZoom: 17,
        minZoom: 5,
      }
    });
  
    return  dato;
  }catch(e){
console.log(e);

  }

}


  

  zoomIn() {
    if (this.zoom < this.options.maxZoom!) this.zoom++
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom!) this.zoom--
  }

  click(event: any) {
    console.log(event)
  }

  logCenter() {
    console.log(JSON.stringify(this.map?.getCenter()))
  }

  addMarkerMe(lat: number, lbg: number) {
    
    this.markers.push({
      position: 
       {
        lat: -33.6014667,
        lng: -70.550116,
      },
      label: {
        color: 'blue',
        text: 'Me',
      },
      icon: 'map-icon-female',
      // title: 'Marker title ' + (this.markers.length + 1),
      options: { animation: google.maps.Animation.DROP },
    });
  }
}
