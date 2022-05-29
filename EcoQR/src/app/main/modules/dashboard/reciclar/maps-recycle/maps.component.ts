import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoadingInfo } from 'src/app/main/components/interfaces/loadingInfo';
import { LoadScreenService } from 'src/app/main/components/loading/load-screen.service';
import { Contenedor } from 'src/app/main/models/contenedor.model';
import { ContextService } from 'src/app/main/services/context.service';
import { MainService } from 'src/app/main/services/main.service';
import { MODAL_TO_UP } from 'src/app/main/shared/library/modals';

@Component({
  selector: 'maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit, AfterViewInit {

  @ViewChild(MapInfoWindow, { static: false }) infoWindow!: MapInfoWindow;
  infoContent: any = {
    name: '',
    materials: [],
  };
  @ViewChild(GoogleMap, { static: false }) map?: GoogleMap;
  zoom = 12;
  puntoRecycle: any[] = [];
  latDes!: number;
  link: string = '';
  longDes!: number;
  googleMapType = 'satellite';
  center!: google.maps.LatLngLiteral;
  address: string = '';
  geoCoder: any;
  latitude: any;
  longitude: any;
  myLatLng: any;
  materialSearch: any[] = [];
  markers: any[] = [];
  options: google.maps.MapOptions = {};
  showMaps = false;
  loadingStatus!: BehaviorSubject<LoadingInfo>;
  constructor(
    private mainSrv: MainService,
    private contexto: ContextService,
    private loadinSrv: LoadScreenService,
    private matDialog: MatDialog,
    protected router: Router
  ) {
    //  this.loadinSrv.setHttpStatus(true);
    this.searchMaterial();
  }

  ngOnInit() {
    // console.log(this.latitude);
  }

  ngAfterViewInit() {
    /// this.setCurrentLocation();
    this.getPosition();
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
            maxZoom: 16,
            minZoom: 5,
          };
          this.getPuntoRecycle(this.latitude, this.longitude);
        }
      );
      this.showMaps = true;
      this.loadinSrv.setHttpStatus(false);
      return;
    } catch (e) {
      this.loadinSrv.setHttpStatus(false);
      console.log(e);
    }
  }

  private async getPuntoRecycle(lat: number, long: number) {
    try {
      this.puntoRecycle = await this.mainSrv
        .getPuntosRecycle(lat, long)
        .toPromise();
      // console.log(this.puntoRecycle);

      for (let index = 0; index < this.puntoRecycle.length; index++) {
        const elementAdd = this.puntoRecycle[index];
        // this.addMarketRecycle(element);
        console.log(this.puntoRecycle[index]);
        console.log(this.materialSearch);

        this.puntoRecycle[index].materials.filter((element: any) => {
          console.log(element);

          this.materialSearch.forEach((element2) => {
            console.log(element2[0]);

            if (element2 === element) {
              this.addMarketRecycle(elementAdd);
            }
          });
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  searchMaterial(): any {
    this.contexto.getContenedores().forEach((element1) => {
      console.log(element1.residuos);
      element1.residuos.forEach((element: any) => {
        if (this.materialSearch.length === 0) {
          this.materialSearch.push(element.material);
        } else {
          const dato = this.materialSearch.find((x) => {
            if (x !== element.material) {
              this.materialSearch.push(element.material);
            }
          });
        }
      });
    });
  }

  addMarkerMe(lat: number, lbg: number) {
    //const markerCustom ='{url:"/assets/img/marker/Street-View-48-96px/icons8-street-view-96.png"'
    this.markers.push({
      position: {
        lat: lat,
        lng: lbg,
      },
      label: {
        color: 'white',
        text: 'Yo',
      },

      /*{
        url: ,
        // scaledSize: new google.maps.Size(32, 40),
        // origin: new google.maps.Point(0, 0), 
        // anchor: new google.maps.Point(16, 40)
      },*/
      // title: 'Marker title ' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.DROP,
        icon: {
          url: 'assets/img/marker/icons8-street-view-48.png',
          anchor: { x: 20, y: 55 },
        },
      },
    });
  }

  addMarketRecycle(marker: any) {
    this.markers.push({
      position: {
        lat: Number(marker.lat),
        lng: Number(marker.lng),
      },
      options: {
        draggable: true,
        icon: {
          animation: google.maps.Animation.BOUNCE,
          url: 'assets/img/marker/recycle-bin.png',
          anchor: { x: 10, y: 15 },
        },
      },
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
    this.link =
      'http://maps.google.com/maps?saddr=' +
      this.latitude +
      ',' +
      this.longitude +
      '&daddr=' +
      this.latDes +
      ',' +
      this.longDes;
    this.updateContext(this.contexto.getContenedores());
    // this.updateContext(this.contexto.getContainerSave());


    //  window.location.href=link;
  }

async updateContenedores(id: any){
  console.log(id);
  
    try {
      const response = await this.mainSrv.updateContenedor(id).toPromise();
      this.router.navigate(['/main/dashboard/init']);
      window.open(this.link, '_blank');
    } catch (error) {
      const dialog = this.matDialog.open(MODAL_TO_UP.MODAL_ERROR.typeModal, MODAL_TO_UP.MODAL_ERROR.configModal );
      dialog.afterClosed().subscribe(data => {
        this.router.navigate(['/main']);
      });
    }
}


updateContext(contenedores: Contenedor[]){

  contenedores.forEach(element=>{
    this.updateContenedores(element.id);
  })
  

 // this.updateContenedores(updatedOSArray);
}
}
