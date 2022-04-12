import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    //  canActivate: [PlatformGuard],
    //  canActivateChild: [PlatformGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '',
        component: DashboardComponent

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
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
