import { AfterContentInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Label } from 'ng2-charts';
import { LoadScreenService } from 'src/app/main/components/loading/load-screen.service';
import { ContextService } from 'src/app/main/services/context.service';
import { MainService } from 'src/app/main/services/main.service';
import { MODAL_TO_UP } from 'src/app/main/shared/library/modals';


@Component({
  selector: 'estadistica-root',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.scss']
})
export class EstadisticaComponent {
  //Called after ngOnInit when the component's or directive's content has been initialized.
  //Add 'implements AfterContentInit' to the class.
  
  title = 'estadistica';
  @ViewChild('pdfCanvas') pdfCanvas!: ElementRef;

  constructor(  
    private loadinSrv: LoadScreenService, 
    private contexto: ContextService,
    private matDialog: MatDialog,
    protected router: Router,
    private mainSrv: MainService ){
     this.loadinSrv.setHttpStatus(true);
      this.getCategoria();
   
     this.getNoContenedor();
     this.loadinSrv.setHttpStatus(false);
    }
  datos: number[] =[];
  arrayData: any[] = [];
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{
      ticks: {
        beginAtZero: true,
        min: 0,
        suggestedMin: 0
      }
      
    }], 
    yAxes: [{
      ticks: {
        beginAtZero: true,
        min: 0,
        suggestedMin: 0
      }
    }] }
  };
  barChartLabels: Label[] = ['plastic', 'paper', 'paperboard', 'cardboard_drink', 'glass', 'metal', 'phone'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData!: ChartDataSets[];
  numSec: any = [];



    pieChartOptions: ChartOptions = {
      responsive: true,
      legend: {
        position: 'top',
      },
      tooltips: {
        enabled: true,
        mode: 'single'
      },
    };
    pieChartLabels: Label[] = ['Contenedor no Reciclado', 'Contenedor Reciclado'];
    pieChartType: ChartType = 'pie';

    pieChartLegend = true;
  
    pieChartPlugins = [];
  
    pieChartColors = [
      {
        backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
      },
    ];
    pieChartData: number[] = [];


 async getCategoria() {
   try {
    const response = await this.mainSrv.getAllResiduos(this.contexto.getUsuario().id).toPromise();
   
    this.barChartLabels.forEach( (item:any)=>{
      console.log(item);
      const num: number = Number(response.filter((s: any) => s.categoria === item).length);
      this.datos.push(num);
        });
  
       this.barChartData =  [{ label: ' Residuos Totales: ' + this.contexto.getUsuario().nombre  ,data:[this.datos[0],this.datos[1],this.datos[2],this.datos[3], this.datos[4], this.datos[5], this.datos[6]],   backgroundColor: [
              '#fffb68',
              '#1751a7',
              '#1751a7',
              '#F5F5DC',
              '#006f4c',
              '#717977',
              '#da4c56'
            ] }];
    return;
 
   } catch (error) {
    this.loadinSrv.setHttpStatus(false);
    const dialog = this.matDialog.open(
      MODAL_TO_UP.MODAL_ERROR.typeModal,
      MODAL_TO_UP.MODAL_ERROR.configModal
    );
    return  dialog.afterClosed().subscribe((data) => {
       this.router.navigate(['/main']);
    });
   }
  }


  

  async getNoContenedor(){
    try{
      const response = await this.mainSrv.getContenedoresNoRecicle(this.contexto.getUsuario().id).toPromise();
      let num1: number = response.length;
      const response2 = await this.mainSrv.getContenedoresSiRecicle(this.contexto.getUsuario().id).toPromise();
      let num2: number = response2.length;
     return this.pieChartData.push(num1, num2)
    }catch(e){
      this.loadinSrv.setHttpStatus(false);
      const dialog = this.matDialog.open(
        MODAL_TO_UP.MODAL_ERROR.typeModal,
        MODAL_TO_UP.MODAL_ERROR.configModal
      );
      return  dialog.afterClosed().subscribe((data) => {
         this.router.navigate(['/main']);
      });
    }
    
}

downloadAsPDF() {
  var data = document.getElementById('pdfCanvas');  
  // const divHeight = data.clientHeight
  // const divWidth = data.clientWidth
  // const ratio = divHeight / divWidth;
  html2canvas(data!,
    {
      height: window.outerHeight + window.innerHeight,
      width: window.outerWidth + window.innerWidth,
      windowHeight: window.outerHeight + window.innerHeight,
      windowWidth: window.outerWidth + window.innerWidth,
      scrollX: 0,
      scrollY: 0
    }
    ).then(canvas => {  
    var pdf = new jsPDF(); 
    var imgData = canvas.toDataURL('image/png');
    var width = pdf.internal.pageSize.getWidth();
    var height = pdf.internal.pageSize.getHeight();
    pdf.addImage(imgData, 'PNG', 10, 10, width, height); 
    pdf.save('canvas.pdf'); 
  });  
}


}


