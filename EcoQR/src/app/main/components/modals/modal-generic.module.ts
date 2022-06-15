import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ModalCIComponent } from './modalCI/modal-ci.component';

import { ModalMVPComponent } from './modalMVP/modal-mvp.component';



@NgModule({
  declarations: [ModalMVPComponent, ModalCIComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    FlexLayoutModule,
    MatInputModule,
    MatIconModule
  ],
  entryComponents: [  ModalMVPComponent, ModalCIComponent]
})
export class ModalGenericModule { }
