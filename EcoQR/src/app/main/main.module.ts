import { CommonModule, TitleCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { initComponent } from './modules/init/init.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SwiperModule } from 'swiper/angular';
import { MatButtonModule } from '@angular/material/button';
import { OnboardingComponent } from './modules/onboarding/obng.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';


// declare const propertiesGlobal: MainEnvironments;
@NgModule({
  declarations: [
    initComponent,
    OnboardingComponent
  ],
  imports: [
    FlexLayoutModule,
    CommonModule,
    MainRoutingModule,
    SwiperModule,
    // CoreModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    
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
 
    //MatSelectModule,
  ],
  providers: [
   // MainService,
    TitleCasePipe,
    //DeviceDetectorService,
   // ModalsService,
  //  ControlService
  ]
})
export class MainModule { }
