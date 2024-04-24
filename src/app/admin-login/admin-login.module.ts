import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { adminloginroutingModule } from './admin-login-routing.module';
import { AdminLoginComponent } from './admin-login.component';
//import { AdminviewComponent } from './adminview/adminview.component';
import { DoctorViewComponent } from './adminview/doctor-view/doctor-view.component';
import { PatientViewComponent } from './adminview/patient-view/patient-view.component';
import { AdminviewComponent } from './adminview/adminview.component';

@NgModule({
  declarations: [
   // AdminLoginComponent,
     AdminviewComponent,
     DoctorViewComponent,
     PatientViewComponent
  ],
  imports: [
     CommonModule,
     adminloginroutingModule
  ],
  providers: [],
  bootstrap: [AdminLoginComponent]
})
export class AdminloginModule { }
