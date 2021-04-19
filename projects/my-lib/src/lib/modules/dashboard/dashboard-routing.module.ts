import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultDashboardComponent } from './default-dashboard/default-dashboard.component';

const dashboardRouting: Routes = [
  {
    path: '',
    redirectTo: 'default',
    pathMatch: 'full'
  },
  {
    path: 'default',
    component: DefaultDashboardComponent,
    // pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forChild(dashboardRouting)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
