import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Doctor } from 'src/app/Model/_doctor';
import { ApiCallService } from 'src/app/service/api-call.service';

@Component({
  selector: 'app-doctor-view',
  templateUrl: './doctor-view.component.html',
  styleUrls: ['./doctor-view.component.css']
})
export class DoctorViewComponent implements OnInit {
  message:any;
  Doctorlist:any;
  Patientlist:any;
  patientID:any;
  doctor:Doctor= new Doctor();
  doctordelete:any;
  unitDoctor:any;
  doctorId:any;
  apiservice: any;

  constructor(private service: ApiCallService,private cookie:CookieService,private router:Router) { }

  ngOnInit(): void {
    this.listDoctors();
  }
  listDoctors(){
    this.service.GetDoctor().subscribe(
      res=>{
       this.Doctorlist=res;
      },
      err=>{
        console.log(err)
      }
    )
}
listPatients(id:any){
  this.service.GetPatients(id).subscribe(
    res=>{
     this.Doctorlist=res;
    },
    err=>{
      console.log(err)
    }
  )
}


ViewDoctorById(id:any){
  this.service.GetDoctorById(id).subscribe(
   res=>{
     this.fetchDoctorById(id);
     this.unitDoctor=res;
     this.doctor.DoctorRegistrationForm=new FormGroup({
       FirstName: new FormControl(res['firstName']),
       LastName: new FormControl(res['lastName']),
       Address: new FormControl(res['address']),
       PhoneNumber: new FormControl(res['phoneNumber']),
       Specialization: new FormControl(res['specialization']),
       Department: new FormControl(res['department']),
      //  Patients: new FormControl(res['patients'])
     })
   },
   err=>{}
  )
}
DeleteDoctor(id:any){
 this.service.DeleteDoctor(id).subscribe(
   res=>{
     this.doctordelete=res;
     this.listDoctors();
     window.location.reload;
   },
   err=>{
     console.log(err);
   }
 )
}

editDoctor(){
 let doctorData=this.doctor.DoctorRegistrationForm.value;
 this.service.UpdateDoctor(this.doctorId,doctorData).subscribe(
   res=>{
     alert('Data Updated Successfully');
     this.listDoctors();
     window.location.reload;
   },
   err=>{
     console.log(err);
   }
 )
}
fetchDoctorById(id:any){
 this.doctorId=id;
 console.log(this.doctorId);
}

addDoctor(){
  let doctorData=this.doctor.DoctorRegistrationForms.value;
  this.service.PostDoctor(doctorData).subscribe(
    res=>{
      this.doctor.DoctorRegistrationForms.reset();
      this.doctor=new Doctor();
      alert('Doctor Added Successfully');
      this.listDoctors();
      
    },
    err=>{
      console.log(err);
    }
  );
}
DoctorRegistrationForms=new FormGroup({
  FirstName:new FormControl('',Validators.compose([Validators.required])),
  LastName:new FormControl('',Validators.compose([Validators.required])),
  PhoneNumber:new FormControl('',Validators.compose([Validators.required,Validators.pattern('^[0-9]{10,10}$')])),
  Department:new FormControl('',Validators.compose([Validators.required])),
  Address:new FormControl('',Validators.compose([Validators.required])),
  Specialization:new FormControl('',Validators.compose([Validators.required]))
})
get FirstName(){return this.DoctorRegistrationForms.get('FirstName')}
get LastName(){return this.DoctorRegistrationForms.get('LastName')}
get PhoneNumber(){return this.DoctorRegistrationForms.get('PhoneNumber')}
get Department (){return this.DoctorRegistrationForms.get('Department')}
get Specialization (){return this.DoctorRegistrationForms.get('Specialization')}
changePatient(event:any){
  this.patientID=event.target.value;
 }
 changeSpecialization(event:any){
  this.patientID=event.target.value;
 }
}
