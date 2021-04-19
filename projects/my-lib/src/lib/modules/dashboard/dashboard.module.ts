import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultDashboardComponent } from './default-dashboard/default-dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [DefaultDashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
