import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TestmonialComponent } from './testmonial/testmonial.component';
import { ConclusionComponent } from './conclusion/conclusion.component';
import { PatientComponent } from './patient/patient.component';
import { PharmacistComponent } from './pharmacist/pharmacist.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminviewComponent } from './admin-login/adminview/adminview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './service/interceptor';
import { AuthGuardService } from './service/authGuard';
import { TopnavComponent } from './topnav/topnav.component';
import { DoctorregComponent } from './doctorreg/doctorreg.component';
import { DoctorViewComponent } from './admin-login/adminview/doctor-view/doctor-view.component';
import { PatientViewComponent } from './admin-login/adminview/patient-view/patient-view.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';
import { DoctorsuccessloginComponent } from './doctorlogin/doctorsuccesslogin/doctorsuccesslogin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    TeamComponent,
    AboutusComponent,
    TestmonialComponent,
    ConclusionComponent,
    PatientComponent,
    PharmacistComponent,
    AdminviewComponent,
    AdminLoginComponent,
    TopnavComponent,
    DoctorregComponent,
    DoctorViewComponent,
    PatientViewComponent,
    DoctorloginComponent,
    DoctorsuccessloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthInterceptor,AuthGuardService],     
  bootstrap: [AppComponent]
})
export class AppModule { }
