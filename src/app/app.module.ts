import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { LoginComponent } from './shared/login/login.component';
import { PopupComponent } from './shared/popup/popup.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {CustomgroupComponent} from './masters/customgroup/customgroup.component';
import * as animations from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";
import { CrudComponent } from './masters/crud/crud.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReportComponent } from './report/report.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    PopupComponent,
    LayoutComponent,
    CustomgroupComponent,
    CrudComponent,
    ReportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    animations.BrowserAnimationsModule,
    NgxSpinnerModule,
    NgbModalModule,
    BrowserAnimationsModule, // Required for animations

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
