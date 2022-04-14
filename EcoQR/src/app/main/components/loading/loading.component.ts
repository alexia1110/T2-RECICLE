import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit{

 public color: ThemePalette = 'primary';
 public mode: ProgressSpinnerMode = 'determinate';

  @Input()
  loading!: boolean;
  constructor(

  ) {

  
  }

  ngOnInit () {
  
 }


}







