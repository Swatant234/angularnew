import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component'
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { CustomgroupComponent } from './masters/customgroup/customgroup.component';
import { CrudComponent } from './masters/crud/crud.component';
import { PopupComponent } from './shared/popup/popup.component';
import { ReportComponent } from './report/report.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'layout',component:LayoutComponent},
  {path:'customgroup',component:CustomgroupComponent},
  {path:'crud',component:CrudComponent},
  {path:'popupanimations',component:PopupComponent},
{  path:'report',component:ReportComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
