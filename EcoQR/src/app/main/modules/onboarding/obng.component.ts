import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { regions } from '../../constant';
import { MODAL_TO_UP } from '../../shared/library/modals';

@Component({
  selector: 'obng-app',
  templateUrl: './obng.component.html',
  styleUrls: ['./obng.component.scss']
})
export class OnboardingComponent {
  title = 'Onboarding';
  regions: any;
  communesPerson: any = regions.regiones;
  formRegister!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private matDialog: MatDialog,
    protected router: Router,
  ) {
    this.formLogin();
    this.regions = regions;
  }

  formLogin(){
    this.formRegister = this.fb.group({
      pass2:['', Validators.compose([Validators.required, Validators.minLength(9)])],
      pass: ['', Validators.compose([Validators.required, Validators.minLength(9)])],
      correo: ['', Validators.compose([Validators.required, Validators.minLength(9)])],
      comuna: ['', Validators.compose([Validators.required, Validators.nullValidator])],
      region: ['', Validators.compose([Validators.required, Validators.nullValidator])],
      numeroCalle: ['', Validators.compose([Validators.required, Validators.nullValidator])],
      calle: ['', Validators.compose([Validators.required, Validators.nullValidator])],
      apellidoFirst: ['', Validators.compose([Validators.required, Validators.nullValidator])],
      apellidoSecon: ['', Validators.compose([Validators.required, Validators.nullValidator])],
      name: ['', Validators.compose([Validators.required, Validators.nullValidator])],
    });
  };

  private matchSelectRegion(key: string, value: any) {
    this.getRegionCompany(regions);
    const data = regions.regiones.filter((s: any) => s.id === value)[0];
    if (data && data !== undefined) {
     this.formRegister.get(key)?.setValue(data);
    //  this.formRegister.get(key)?.disable();
    }
  }

  getRegionCompany(region: any) {
    this.communesPerson = region.comunas;
    //this.formAgent.get('suburbCompany').setValue('');
    return region.region;
  }


  getRegionPerson(region: any) {
    this.communesPerson = region.comunas;
    //this.formAgent.get('suburb').setValue('');
    return region.region;
  }
  radioButton(event: any) {
//guardar genero
  }

  submitForm(){
console.log(this.formRegister);
    this.showSuccesRegister();
  }
  showSuccesRegister(){
    console.log(MODAL_TO_UP.MODAL_SUCCES);
    const data_modal = MODAL_TO_UP.MODAL_SUCCES;
    data_modal.configModal.data.modal = {
      title: 'Registro Finalizado',
      details: 'Felicitaciones ya pertences a la comunidad EcoQR, ahora podras disfrutar de las funcionalidades de nuestra APP',
      type: 'succes',
      button: 'ACEPTAR'
    };
    const dialog = this.matDialog.open(MODAL_TO_UP.MODAL_INFO.typeModal, data_modal.configModal );
    dialog.afterClosed().subscribe(data => {
      this.router.navigate(['/main/dashboard/init']);
    });
  }
}
