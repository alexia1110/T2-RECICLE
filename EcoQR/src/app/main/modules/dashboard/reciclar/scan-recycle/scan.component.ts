import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


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

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
  }
  public scanSuccessHandler($event: any) {
    this.scannerEnabled = false;
    this.information = "Espera recuperando información... ";
console.log($event);
window.location.href=$event;
 

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

}

interface Transport {
  plates: string;
  slot: Slot;
}

interface Slot {
  name: string;
  description: string;
}