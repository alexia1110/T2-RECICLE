import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ScanRecycleComponent } from './reciclar/scan-recycle/scan.component';
import { StepRecycleComponent } from './reciclar/step-recycle/stepRecycle.component';

const routes: Routes = [
  { path: 'init', component: DashboardComponent,
      children: [
          { path: 'reciclar', component: StepRecycleComponent },
          {path: 'scan', component: ScanRecycleComponent}
          // {path: 'face-autenticacion', component: LivenessTocComponent },
          // { path: 'ftu-pyme', component: FtuComponent },
          // { path: 'gif-pyme', component: GifComponent }
        ]
      },
     
 //     { path: 'reciclar',  component: DashboardComponent},
      
      // { path: 'datos-pyme', component: AgentInformationComponent },
      // { path: 'kyc-pyme', component: KycFatcaComponent },
      // { path: 'sms-pyme', component: SmsComponent },
      // { path: 'palabra-seguridad', component: PasswordComponent },
      // { path: 'toc', component: TocComponent,
      // children: [
      //     { path: 'autenticacion', component: AuthTocComponent },
      //     {path: 'face-autenticacion', component: LivenessTocComponent },
      //     { path: 'ftu-pyme', component: FtuComponent },
      //     { path: 'gif-pyme', component: GifComponent }
      //   ]
      // },
      // { path: 'finalizacion-pyme', component: EndingFlowComponent },
      // { path: 'oferta-pyme', component: PlanDocumentComponent },
      // { path: 'documento-pyme', component: ContractComponent },
      // { path: 'preguntas', component: PreguntasEquifaxComponent }
    

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
