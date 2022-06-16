import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { Router } from '@angular/router';
import { LoadScreenService } from 'src/app/main/components/loading/load-screen.service';
import { MainService } from 'src/app/main/services/main.service';
import { MODAL_TO_UP } from 'src/app/main/shared/library/modals';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataSource:any;
  panelOpenState = false;
  constructor(private _formBuilder: FormBuilder, protected router: Router,  private mainSrv: MainService,  private matDialog: MatDialog,   private loadinSrv: LoadScreenService,)
   {
    this.getInfo();
   }



    ngOnInit() {

  
    }


    async getInfo(){
      try {
         this.loadinSrv.setHttpStatus(true);
        const resp = await this.mainSrv.getInfo().toPromise();
        this.dataSource = resp;
        this.loadinSrv.setHttpStatus(false);
      } catch (error) {
        this.loadinSrv.setHttpStatus(false);
       this.matDialog.open(MODAL_TO_UP.MODAL_ERROR.typeModal, MODAL_TO_UP.MODAL_ERROR.configModal );
      }
    }

  

 

  
  
}