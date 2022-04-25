import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mvp',
  templateUrl: './modal-mvp.component.html',
  styleUrls: ['./modal-mvp.component.scss']
})
export class ModalMVPComponent {

  modalIcon: string = '';
  colorIcon: string = '';
  title: string;
  details: string;
  button = 'Aceptar';
  button2 = 'Cancelar'
  botttonIcon: string = '';;
  bottonColor: string = '';;
  tipeButton: string;
  cantButton: boolean = false;
  showCode: boolean = true;

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalMVPComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router
  ) {

    console.log(data.modal.title);
    
    this.data = data.modal;
    this.title = data.modal.title;
    this.details = data.modal.details;
    this.button = data.modal.button;
  
    this.setType();
    

    this.tipeButton = 'btn-secondary';
  }

  setType() {
    switch (this.data.type) {
      case 'scan': {
        this.modalIcon = 'info';
        this.colorIcon = 'blue';
        this.cantButton = true;

        break;
      }
      case 'succes': {
        this.modalIcon = 'done';
        this.colorIcon = 'green';

        break;
      }
      case 'error': {
        this.modalIcon = 'error';
        this.colorIcon = 'red';
        break;
      }
      case 'info': {
        this.modalIcon = 'info';
        this.colorIcon = 'blue';
        break;
      }
      case 'time': {
        this.modalIcon = 'access_timeaccess_time';
        this.colorIcon = 'blue';
        break;
      }
      case 'refresh': {
        this.modalIcon = 'refresh';
        this.colorIcon = 'blue';
        this.showCode = false;
        break;
      }
    }
  }

  clickClose(): void {
    // if(!isNullOrUndefined(this.data.jump)){
 
    //     this.dialogRef.close({ event: true });

 
    // }else
    {
      if (this.data.relocation && this.data.relocation != undefined) {
        this.router.navigate([this.data.relocation]);
      }
      this.dialogRef.close({ event: true });
    }

  }

  clickClose2(){
    this.dialogRef.close({ event: false });
  }
}
