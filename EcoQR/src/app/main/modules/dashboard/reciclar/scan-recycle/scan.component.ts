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

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [false, Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: [true, Validators.required],
    });
  }
}