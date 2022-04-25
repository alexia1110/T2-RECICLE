import { CommonModule, TitleCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SwiperModule } from 'swiper/angular';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import {MatStepperModule} from '@angular/material/stepper';
import { StepRecycleComponent } from './reciclar/step-recycle/stepRecycle.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ScanRecycleComponent } from './reciclar/scan-recycle/scan.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { MapsComponent } from './reciclar/maps-recycle/maps.component';
// import { AgmCoreModule } from '@agm/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { MainService } from '../../services/main.service';
import { HttpClientModule } from '@angular/common/http';
import { ControlService } from '../../services/control.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import { ContenerComponent } from './contenedor/contener.component';

// import { GoogleMapsModule } from '@angular/google-maps';

//import QrScanner from 'qr-scanner'; 



// declare const propertiesGlobal: MainEnvironments;
@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    StepRecycleComponent,
    ScanRecycleComponent,
    MapsComponent,
    ContenerComponent

  ],
  imports: [
    FlexLayoutModule,
    CommonModule,
    DashboardRoutingModule,
    SwiperModule,
    MatInputModule,
    MatIconModule,
    // CoreModule,
    //QrScanner,
    ZXingScannerModule,
    MatStepperModule,
    MatSidenavModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
    MatProgressSpinnerModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyAAgo1POWsDP7NveCX56NS2LaIP1ZzuVUU'
    // }),
    
    GoogleMapsModule,
    // MatTableModule,
    // MatButtonToggleModule,
    // MatRadioModule,
    // MatSelectModule,
    // MatInputModule,
    // MatButtonModule,
    // MatIconModule,
    // MatCheckboxModule,
    // MatTooltipModule,
    // MatSlideToggleModule,
    // MatSliderModule,
   // MatSliderModule,
  //  MatSlideToggleModule,
    // MatExpansionModule,
    HttpClientModule,
    //MatSelectModule,
  ],
  exports:[],
  providers: [MainService, ControlService]
})
export class DashboardModule { }
