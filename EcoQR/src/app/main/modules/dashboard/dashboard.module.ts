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
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';



// declare const propertiesGlobal: MainEnvironments;
@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent
  ],
  imports: [
    FlexLayoutModule,
    CommonModule,
    DashboardRoutingModule,
    SwiperModule,
    MatInputModule,
    MatIconModule,
    // CoreModule,
    MatSidenavModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule
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
  ]
})
export class DashboardModule { }
