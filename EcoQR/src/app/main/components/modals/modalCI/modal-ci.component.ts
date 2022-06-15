import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Modal } from '../../interfaces/modal.interface';

@Component({
  selector: 'app-ci',
  templateUrl: './modal-ci.component.html',
  styleUrls: ['./modal-ci.component.scss']
})
export class ModalCIComponent {

  modalIcon: string;
  colorIcon: string;
  button = 'ENTENDIDO';


  constructor(
    public dialogRef: MatDialogRef<ModalCIComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Modal,

    private router: Router
  ) {
    this.modalIcon = 'icon-SYS004';
    this.colorIcon = 'blue';
    console.log(data);
    
  }




  clickClose(): void {
    this.dialogRef.close({ event: true });
  }
}
