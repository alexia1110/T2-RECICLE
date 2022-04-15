import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { MainService } from 'src/app/main/services/main.service';

@Component({
  selector: 'maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit, AfterViewInit {
  // googleMapType = 'map';
  // title = 'My first AGM project';
  // lat = 51.678418;
  // lng = 7.809007;
  // zoom:number = 12;
  @ViewChild(MapInfoWindow, { static: false }) infoWindow!: MapInfoWindow;
  infoContent: any = {
    name: '',
    materials: [],
  };
  @ViewChild(GoogleMap, { static: false }) map?: GoogleMap;
  zoom = 12;
  puntoRecycle: any[] = [];
  latDes!: number;
  longDes!: number;
  googleMapType = 'satellite';
  center!: google.maps.LatLngLiteral;
  address: string = '';
  geoCoder: any;
  latitude: any;
  longitude: any;
  myLatLng: any;
  markers: any[] = [];
  options: google.maps.MapOptions = {};
  constructor(private mainSrv: MainService) {
    this.getPosition();
  }

  ngOnInit() {
    this.getPosition();
    // console.log(this.latitude);
  }

  ngAfterViewInit() {
    /// this.setCurrentLocation();
  }

  async getPosition(): Promise<any> {
    try {
      const dato = await navigator.geolocation.getCurrentPosition(
        (position) => {
          this.addMarkerMe(position.coords.latitude, position.coords.longitude);
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.myLatLng = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          this.options = {
            center: this.myLatLng,
            maxZoom: 17,
            minZoom: 5,
          };
          this.getPuntoRecycle(this.latitude, this.longitude);
        }
      );

      return dato;
    } catch (e) {
      console.log(e);
    }
  }

  private async getPuntoRecycle(lat: number, long: number) {
    try {
      this.puntoRecycle = await this.mainSrv
        .getPuntosRecycle(lat, long)
        .toPromise();
      console.log(this.puntoRecycle);
      for (let index = 0; index < this.puntoRecycle.length; index++) {
        const element = this.puntoRecycle[index];
        this.addMarketRecycle(element);
      }
      //this.addMarketRecycle(this.puntoRecycle[0]);
    } catch (error) {
      console.log(error);
    }
  }

  addMarkerMe(lat: number, lbg: number) {
    this.markers.push({
      position: {
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

  addMarketRecycle(marker: any) {
    const svgMarker = {
      path: 'M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z',
      fillColor: 'blue',
      fillOpacity: 0.6,
      strokeWeight: 0,
      rotation: 0,
      scale: 2,
      anchor: new google.maps.Point(15, 30),
    };
    this.markers.push({
      position: {
        lat: Number(marker.lat),
        lng: Number(marker.lng),
      },
      options: {
        draggable: true,
      },
      icon: svgMarker,
      title: marker.manager,
      info: {
        name: marker.manager,
        material: marker.materials,
      },
    });
  }

  zoomIn() {
    if (this.zoom < this.options.maxZoom!) this.zoom++;
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom!) this.zoom--;
  }

  click(event: any) {
    // console.log(event)
  }

  logCenter() {
    console.log(JSON.stringify(this.map?.getCenter()));
  }

  openInfo(marker?: MapMarker, content?: any, position?: any) {
    this.infoContent = {
      name: content.name,
      materials: content.material,
    };
    console.log(position);
    this.latDes = position.lat;
    this.longDes = position.lng;

    this.infoWindow.open(marker);
  }

  revisarItem(item: any) {
    console.log(item);
  }

  jumpMap() {
    const link =
      'http://maps.google.com/maps?saddr=' +
      this.latitude +
      ',' +
      this.longitude +
      '&daddr=' +
      this.latDes +
      ',' +
      this.longDes;
    console.log(link);
    window.open(link, '_blank');
    //  window.location.href=link;
  }
}
