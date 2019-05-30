import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { ProfileTableComponent } from './profile-table/profile-table.component';
import { CupboardReviewComponent } from './cupboard-review/cupboard-review.component';

const routes: Routes = [
  { path: 'home', component: MainPageComponent },
  { path: '', redirectTo:"/home", pathMatch: 'full'},
  { path: 'monitoring', component: MonitoringComponent },
  //{ path: 'profile-list', component:ProfileTableComponent },
  { path: 'cupboard-review', component:CupboardReviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
