import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoadScreenService } from '../../components/loading/load-screen.service';
import { regions } from '../../constant';
import { Usuario } from '../../models/usuario.model';
import { MainService } from '../../services/main.service';
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
  regionSelect: any;
  formRegister!: FormGroup;
  formSimulation!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private matDialog: MatDialog,
    private mainSrv: MainService,
    private loadinSrv: LoadScreenService,
    protected router: Router,
  ) {
    this.loadinSrv.setHttpStatus(false);
    this.formLogin();
    this.regions = regions;
  }

  
  formLogin(){
    this.formRegister = this.fb.group({
      pass2:['', Validators.compose([Validators.required, Validators.minLength(9)])],
      pass: ['', Validators.compose([Validators.required, Validators.minLength(9)])],
      mail: ['', Validators.compose([Validators.required, Validators.minLength(9)])],
      id_ciudad: ['', Validators.compose([Validators.required, Validators.nullValidator])],
      id_region: ['', Validators.compose([Validators.required, Validators.nullValidator])],
      numeroCalle: ['', Validators.compose([Validators.required, Validators.nullValidator])],
      calle: ['', Validators.compose([Validators.required, Validators.nullValidator])],
      sexo: ['', Validators.compose([Validators.required, Validators.nullValidator])],
      apellidoFirst: ['', Validators.compose([Validators.required, Validators.nullValidator])],
      apellidoSecond: ['', Validators.compose([Validators.required, Validators.nullValidator])],
      nombre: ['', Validators.compose([Validators.required, Validators.nullValidator])],
      estado: [true, Validators.compose([Validators.required, Validators.nullValidator])],
    });
    this.formSimulation = this.fb.group({
      termCondiciones: [false, Validators.pattern('true')],
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
    this.regionSelect = region.id;
    return region.region;
  }
  radioButton(event: any) {  
   this.formRegister.get('sexo')?.setValue(event.value);
  }

  submitForm(){
    this.formRegister.get('id_region')?.setValue(this.regionSelect);
const usuario: Usuario = this.formRegister.value;
this.loadinSrv.setHttpStatus(true);
this.newUser(usuario);

  }

async newUser(usuario: Usuario){
  try {
    const response = await this.mainSrv.setNewUser(usuario).toPromise();
   this.showSuccesRegister();
  } catch (error) {
    this.loadinSrv.setHttpStatus(false);
    const dialog = this.matDialog.open(MODAL_TO_UP.MODAL_ERROR.typeModal, MODAL_TO_UP.MODAL_ERROR.configModal );
    dialog.afterClosed().subscribe(data => {
      this.router.navigate(['/main']);
    });
  }
}

  showSuccesRegister(){
    const data_modal = MODAL_TO_UP.MODAL_SUCCES;
    data_modal.configModal.data.modal = {
      title: 'Registro Finalizado',
      details: 'Felicitaciones ya pertences a la comunidad EcoQR, ahora podras disfrutar de las funcionalidades de nuestra APP',
      type: 'succes',
      button: 'ACEPTAR'
    };
    this.loadinSrv.setHttpStatus(false);
    const dialog = this.matDialog.open(MODAL_TO_UP.MODAL_INFO.typeModal, data_modal.configModal );
    dialog.afterClosed().subscribe(data => {
      this.router.navigate(['/main/dashboard/init']);
    });
  }

  showinit(){
    this.router.navigate(['/main']);
  }
}
