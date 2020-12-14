import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardmComponent } from './dashboardm/dashboardm.component';
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboardm', component: DashboardmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }