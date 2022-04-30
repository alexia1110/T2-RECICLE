import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { QrData } from 'src/app/main/components/interfaces/qrData';
import { ContextService } from 'src/app/main/services/context.service';
import { iconByCategorie } from 'src/app/main/shared/functions/utils';
import { MODAL_TO_UP } from 'src/app/main/shared/library/modals';


@Component({
  selector: 'contener-recycle',
  templateUrl: './contener.component.html',
  styleUrls: ['./contener.component.scss']
})
export class ContenerComponent implements OnInit, AfterContentInit {



  @ViewChild(MatTable) myTable!: MatTable<any>;
  constructor(   private matDialog: MatDialog,  protected router: Router, private contexto : ContextService) {
    console.log(this.contexto.getContainerSave());
    
  }
  displayedColumns: string[] = [ 'Nombre', 'Material', 'tipo', 'Contenedor', 'color', 'step'];
  dataSource:any;
  ngOnInit() {
    
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    this.contexto.getContainerSave().filter(x=>
    x.estado == true);
   this.dataSource = this.contexto.getContainerSave();
    
  }




  // showContinueNext(){
  //   const dialog =    this.matDialog.open(MODAL_TO_UP.MODAL_SCAN.typeModal, MODAL_TO_UP.MODAL_SCAN.configModal );
  //   dialog.afterClosed().subscribe(data => {
  //     console.log(data);
  //     if(data.event){
  //       this.router.navigate(['/main/dashboard/init/maps']);
  //     }else {
  //       this.router.navigate(['/main/dashboard/init']);
  //     }
  //     // 
  //   });
  // }

  gotoNext(){
    this.router.navigate(['/main/dashboard/init/maps']);
  }


}
