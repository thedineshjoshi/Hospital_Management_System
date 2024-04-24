import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ConclusionComponent } from './conclusion/conclusion.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { TestmonialComponent } from './testmonial/testmonial.component';
import { PatientComponent } from './patient/patient.component';
import { PharmacistComponent } from './pharmacist/pharmacist.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminviewComponent } from './admin-login/adminview/adminview.component';
import { AuthGuardService } from './service/authGuard';
import { TopnavComponent } from './topnav/topnav.component';
import { DoctorregComponent } from './doctorreg/doctorreg.component';
import { DoctorViewComponent } from './admin-login/adminview/doctor-view/doctor-view.component';
import { PatientViewComponent } from './admin-login/adminview/patient-view/patient-view.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';
import { DoctorsuccessloginComponent } from './doctorlogin/doctorsuccesslogin/doctorsuccesslogin.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'services',component:ServicesComponent},
  {path:'team',component:TeamComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'testmonial',component:TestmonialComponent},
  {path:'conclusion',component:ConclusionComponent},
  {path:'doctor',component:DoctorregComponent},
  {path:'patient',component:PatientComponent},
  {path:'pharmacist',component:PharmacistComponent},
  {path:'adminlogin',component:AdminLoginComponent},
  {path:'adminview',component:AdminviewComponent,canActivate:[AuthGuardService]},
  {path:'topnav',component:TopnavComponent},
  {path:'admindoctorview',component:DoctorViewComponent},
  {path:'adminpatientview',component:PatientViewComponent},
  {path:'loginasdoctor',component:DoctorloginComponent},
  {path:'doctorsuccesslogin',component:DoctorsuccessloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
