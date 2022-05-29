import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { QrData } from 'src/app/main/components/interfaces/qrData';
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


  panelOpenState = false;
  @ViewChild(MatTable) myTable!: MatTable<any>;
  constructor(  private matDialog: MatDialog,  
                protected router: Router, 
                private contexto : ContextService,     
                private mainSrv: MainService ) {


 
  }
  displayedColumns: string[] = [ 'id', 'date_creacion', 'date_reciclado', 'estado', 'residuos'];
  dataSource:any;
  ngOnInit() {
  
  }

  async getContenedores(){
    try {
      const response = await this.mainSrv.getContenedoresNoRecicle(this.contexto.getUsuario().id!).toPromise();
      this.contexto.setContenedores(response);
      this.dataSource = this.contexto.getContenedores();

      
    } catch (error) {
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
