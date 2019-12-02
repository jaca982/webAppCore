import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [HomeComponent, DashboardLayoutComponent],
  imports: [CommonModule, DashboardRoutingModule]
})
export class DashboardModule {}
