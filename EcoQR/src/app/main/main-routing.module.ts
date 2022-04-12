import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { initComponent } from './modules/init/init.component';
import { OnboardingComponent } from './modules/onboarding/obng.component';

const routes: Routes = [
  {
    path: '',
    //  canActivate: [PlatformGuard],
    //  canActivateChild: [PlatformGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'bienvenida'
      },
      { path: 'bienvenida',  component: initComponent},
      {path: 'Onboarding', component:OnboardingComponent },
      {
        path: 'dashboard',
        // canActivate: [PlatformGuard],
        // canActivateChild: [PlatformGuard],
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
