import { Component, OnInit } from '@angular/core';
import { Patient } from '../Model/_patient';
import { ApiCallService } from '../service/api-call.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  message:any;
  doctorID:any;
  doctorlist:any;
  PatientList:any;
  bloodGroup:any;
  patient:Patient= new Patient();
  constructor(private apiservice:ApiCallService) {}
  addPatient(){
    let PatientData=this.patient.PatientRegistrationForm.value;
    this.apiservice.PostPatient(PatientData,this.doctorID).subscribe(
      res=>{
        this.patient.PatientRegistrationForm.reset();
        this.patient=new Patient();
        alert('Patient Added Successfully');
        this.listDoctors();
      },
      err=>{
        console.log(err);
      }
    );
   }
   listDoctors(){
            this.apiservice.GetDoctor().subscribe(
              res=>{
                this.doctorlist=res;
              },
              err=>{
                console.log(err);
              }
            )

   }
   changeDoctor(event:any){
    this.doctorID=event.target.value;
   }
  ngOnInit(): void {
    this.listDoctors();
  }

  
}
