import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';

@Component({
  selector: 'stepRecycle',
  templateUrl: './stepRecycle.component.html',
  styleUrls: ['./stepRecycle.component.scss']
})
export class StepRecycleComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  isEditable = false;
  selectedIndex!: number;
  isOptional = true;
  isLinear = true;

  constructor(private _formBuilder: FormBuilder, protected router: Router) {}



    ngOnInit() {
  
    }


  

  toScan(){
    this.router.navigate(['/main/dashboard/init/scan'])
  }

  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
  
}