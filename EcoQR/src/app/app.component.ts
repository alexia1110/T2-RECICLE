import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingInfo } from './main/components/interfaces/loadingInfo';
import { LoadScreenService } from './main/components/loading/load-screen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EcoQR';
  loadingStatus: Observable<LoadingInfo>;

  constructor( private loadinSrv: LoadScreenService){
    this.loadingStatus = this.loadinSrv.getHttpStatus();
  }
}
