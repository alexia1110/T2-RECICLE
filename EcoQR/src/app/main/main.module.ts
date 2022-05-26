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
import { MatIconModule } from '@angular/material/icon';
import { ModalGenericModule } from './components/modals/modal-generic.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoadingComponent } from './components/loading/loading.component';
import { MainService } from './services/main.service';
import { ControlService } from './services/control.service';


// declare const propertiesGlobal: MainEnvironments;
@NgModule({
  declarations: [
    initComponent,
    OnboardingComponent,
    LoadingComponent
  ],
  imports: [
    FlexLayoutModule,
    CommonModule,
    MainRoutingModule,
    SwiperModule,
    ModalGenericModule,
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
    MatIconModule,
    MatProgressSpinnerModule,
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
  exports:[LoadingComponent],
  providers: [
   MainService,
    TitleCasePipe,
    //DeviceDetectorService,
   // ModalsService,
  ControlService
  ]
})
export class MainModule { }
