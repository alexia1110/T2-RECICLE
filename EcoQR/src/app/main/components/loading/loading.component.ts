import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { Observable } from 'rxjs';
import { LoadingInfo } from '../interfaces/loadingInfo';


@Component({
  selector: 'app-load-screen',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit{

 public color: ThemePalette = 'primary';
 public mode: ProgressSpinnerMode = 'determinate';
 @Input() cambioEstado!: Observable<LoadingInfo>;
 @Input() embebido:boolean = false;
 titulo: string = '';
 detalle: string = '';


 loading = true;
  constructor(

  ) {
    console.log('call loading');

  
  }

  ngOnInit () {
    this.cambioEstado.subscribe((info: LoadingInfo) => {
      this.loading = info.status;
      this.titulo = '';
      this.detalle = '';
      console.log(info);
      if (info.titulo) { this.titulo = info.titulo; }
      if (info.detalle) { this.detalle = info.detalle; }
  
    });
 }



}

