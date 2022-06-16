import { Component } from '@angular/core';
import { ContextService } from '../../services/context.service';

@Component({
  selector: 'dashboard-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  title = 'dashboard';

  // safeSrc!: SafeResourceUrl;
  constructor(  ){

    // this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl("https://youtu.be/embede/JTUkVaYp54");
  
  }

}
