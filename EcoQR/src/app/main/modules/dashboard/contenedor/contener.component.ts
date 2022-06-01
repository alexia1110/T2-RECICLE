import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { QrData } from 'src/app/main/components/interfaces/qrData';
import { LoadScreenService } from 'src/app/main/components/loading/load-screen.service';
import { ContextService } from 'src/app/main/services/context.service';
import { MainService } from 'src/app/main/services/main.service';
import { iconByCategorie } from 'src/app/main/shared/functions/utils';
import { MODAL_TO_UP } from 'src/app/main/shared/library/modals';


@Component({
  selector: 'contener-recycle',
  templateUrl: './contener.component.html',
  styleUrls: ['./contener.component.scss']
})
export class ContenerComponent implements OnInit, AfterContentInit {

  showContendores: boolean = false;
  panelOpenState = false;
  @ViewChild(MatTable) myTable!: MatTable<any>;
  constructor(  private matDialog: MatDialog,  
                private loadinSrv: LoadScreenService,
                protected router: Router, 
                private contexto : ContextService,     
                private mainSrv: MainService ) {

                  this.loadinSrv.setHttpStatus(true);
 
  }
  displayedColumns: string[] = [ 'id', 'date_creacion', 'date_reciclado', 'estado', 'residuos'];
  dataSource:any;
  ngOnInit() {
  
  }



  async getContenedores(){
    try {
      const response = await this.mainSrv.getContenedoresNoRecicle(this.contexto.getUsuario().id!).toPromise();
      this.contexto.setContenedores(response);
      if(this.contexto.getContenedores().length > 0){
        this.showContendores = true;
      }
      this.dataSource = this.contexto.getContenedores();
      this.dataSource.forEach((item: any) =>{

      //  console.log(item.residuos);
       item.residuos.forEach((element: any)=>{
        const categoria = iconByCategorie( element.material);
           const info: QrData = {
          iconContaner: 'assets/img/' + categoria?.icon_recicle + '.png',
          color: categoria?.color,
          step: categoria?.step,
        };
        element.info = info;
       });
    //     for(let i = 0; i < item.residuos.length ; i++) {
    //  const element = iconByCategorie( item.residuos[i].material);
    //      const info: QrData = {
    //       iconContaner: 'assets/img/' + element?.icon_recicle + '.png',
    //       color: element?.color,
    //       step: element?.step,
    //     };
    //      item.residuos[i].info = info;
    //     }
        
    
       });
      this.loadinSrv.setHttpStatus(false);
   console.log(   this.dataSource);
   
    } catch (error) {
      this.loadinSrv.setHttpStatus(false);
       this.matDialog.open(MODAL_TO_UP.MODAL_ERROR.typeModal, MODAL_TO_UP.MODAL_ERROR.configModal );
  
    }
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
  //   this.contexto.getContainerSave().filter(x=>
  //   x.estado == true);

    this.getContenedores();
    
  }

  gotoNext(){
    this.router.navigate(['/main/dashboard/init/maps']);
  }


}
