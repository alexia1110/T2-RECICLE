import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { QrData } from 'src/app/main/components/interfaces/qrData';
import { ContextService } from 'src/app/main/services/context.service';
import { iconByCategorie } from 'src/app/main/shared/functions/utils';
import { MODAL_TO_UP } from 'src/app/main/shared/library/modals';


@Component({
  selector: 'scan-recycle',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanRecycleComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  isEditable = false;
   scannerEnabled: boolean = true;
  private transports: Transport[] = [];
  private information: string = "No se ha detectado información de ningún código. Acerque un código QR para escanear.";
  @ViewChild(MatTable) myTable!: MatTable<any>;
  constructor(   private matDialog: MatDialog,  protected router: Router, private contexto : ContextService) {}
  displayedColumns: string[] = [ 'Nombre', 'Material', 'tipo', 'Contenedor', 'color'];
  dataSource:any;
  ngOnInit() {
  }
  public scanSuccessHandler($event: any) {
    this.scannerEnabled = false;
    this.information = "Espera recuperando información... ";

const parse2 = JSON.parse($event);
const dato: QrData = parse2;

 if(dato){
  console.log(    dato.material);
   
  const element = iconByCategorie(dato.material!);

  dato.categorie = element?.categorie_name;
  dato.iconContaner = 'assets/img/' + element?.icon_recicle + '.png';
  dato.color = element?.color;

  this.contexto.setContainerSave(dato);
  this.myTable.dataSource = this.contexto.getContainerSave();
  this.myTable.renderRows();   
console.log(  this.myTable.dataSource);

  
   this.showContinueScan();
//  this.scannerEnabled = true;
 }
//window.location.href=$event;
 

    // const appointment = new Appointment($event);
    // this.logService.logAppointment(appointment).subscribe(
    //   (result: OperationResponse) => {
    //     this.information = $event;
    //     this.transports = result.object;
    //     this.cd.markForCheck();
    //   },
    //   (error: any) => {
    //     this.information = "Ha ocurrido un error por favor intentalo nuevamente ... ";
    //     this.cd.markForCheck();
    //   });
  }
  public enableScanner() {
    this.scannerEnabled = !this.scannerEnabled;
    this.information = "No se ha detectado información de ningún código. Acerque un código QR para escanear.";
  }

  showContinueScan(){
    const dialog =    this.matDialog.open(MODAL_TO_UP.MODAL_SCAN.typeModal, MODAL_TO_UP.MODAL_SCAN.configModal );
    dialog.afterClosed().subscribe(data => {
      console.log(data);
      if(data.event){
        this.scannerEnabled = true;
      }else {
        this.router.navigate(['/main/dashboard/init/maps']);
      }
      // 
    });
  }


}

interface Transport {
  plates: string;
  slot: Slot;
}

interface Slot {
  name: string;
  description: string;
}