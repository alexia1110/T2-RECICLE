import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { QrData } from 'src/app/main/components/interfaces/qrData';
import { LoadScreenService } from 'src/app/main/components/loading/load-screen.service';
import { Contenedor } from 'src/app/main/models/contenedor.model';
import { Residuo } from 'src/app/main/models/residuo.model';
import { ContextService } from 'src/app/main/services/context.service';
import { MainService } from 'src/app/main/services/main.service';
import { iconByCategorie } from 'src/app/main/shared/functions/utils';
import { MODAL_TO_UP } from 'src/app/main/shared/library/modals';

@Component({
  selector: 'scan-recycle',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss'],
})
export class ScanRecycleComponent implements OnInit {
  isEditable = false;
  scannerEnabled: boolean = true;
  private information: string =
    'No se ha detectado información de ningún código. Acerque un código QR para escanear.';
  @ViewChild(MatTable) myTable!: MatTable<any>;

  constructor(
    private matDialog: MatDialog,
    protected router: Router,
    private contexto: ContextService,
    private loadinSrv: LoadScreenService,
    private mainSrv: MainService
  ) {}

  displayedColumns: string[] = [
    'Nombre',
    'Material',
    'tipo',
    'Contenedor',
    'color',
  ];
  dataSource: any;
  arrayResiduos: any[] = [];
  ngOnInit() {}
  public scanSuccessHandler($event: any) {
    this.loadinSrv.setHttpStatus(true);
    this.scannerEnabled = false;
    this.information = 'Espera recuperando información... ';

    const parse2 = JSON.parse($event);
    const dato: Residuo = parse2;

    if (dato) {
      const element = iconByCategorie(dato.material);
      const info: QrData = {
        iconContaner: 'assets/img/' + element?.icon_recicle + '.png',
        color: element?.color,
        step: element?.step,
      };
      dato.info = info;

      this.arrayResiduos.push(dato);
      this.myTable.dataSource = this.arrayResiduos;
      this.myTable.renderRows();
      this.loadinSrv.setHttpStatus(false);
    }
    //window.location.href=$event;
  }
  public enableScanner() {
    this.scannerEnabled = !this.scannerEnabled;
    this.information =
      'No se ha detectado información de ningún código. Acerque un código QR para escanear.';
  }

  continueScan() {
    this.scannerEnabled = true;
  }

  showContinueNext() {
    const dialog = this.matDialog.open(
      MODAL_TO_UP.MODAL_SCAN.typeModal,
      MODAL_TO_UP.MODAL_SCAN.configModal
    );
    dialog.afterClosed().subscribe((data) => {
      this.loadinSrv.setHttpStatus(true);
      if (data.event) {
        this.saveResiduos();
        return this.router.navigate(['/main/dashboard/init/maps']);
      } else {
        this.saveResiduos();
        return this.router.navigate(['/main/dashboard/init/container']);
      }
      //
    });
  }

  async saveResiduos() {
    try {
      const contenedor: Contenedor = {
        estadoReciclado: false,
        fechaReciclado: null,
        residuos: this.arrayResiduos,
      };
      const response = await this.mainSrv
        .newContenedor(this.contexto.getUsuario().id, contenedor)
        .toPromise();
      this.contexto.setContenedores(response);
      this.loadinSrv.setHttpStatus(false);
    } catch (error) {
      this.loadinSrv.setHttpStatus(false);
      const dialog = this.matDialog.open(
        MODAL_TO_UP.MODAL_ERROR.typeModal,
        MODAL_TO_UP.MODAL_ERROR.configModal
      );
      dialog.afterClosed().subscribe((data) => {
        this.router.navigate(['/main']);
      });
    }
  }

  gotoNext() {
    this.showContinueNext();
  }
}
