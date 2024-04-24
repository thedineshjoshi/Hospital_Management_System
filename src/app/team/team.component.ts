import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Doctor } from '../Model/_doctor';
import { ApiCallService } from '../service/api-call.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  message:any;
  Doctorlist:any;
  doctor:Doctor= new Doctor();
  constructor(private apiservice:ApiCallService) {}
  addDoctor(){
    this.apiservice.PostDoctor(this.doctor).subscribe(
      res=>{
        this.message="Doctor Added Successfully";
      },
      err=>{
        console.log(err);
      }
    );
  }
  listDoctors(){
    this.apiservice.GetDoctor().subscribe(
      res=>{
       this.Doctorlist=res;
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    )
 }
  ngOnInit(): void {
    this.listDoctors();
  }

  DoctorRegistrationForm=new FormGroup({
    FirstName:new FormControl('',Validators.compose([Validators.required])),
    LastName:new FormControl('',Validators.compose([Validators.required])),
    PhoneNumber:new FormControl('',Validators.compose([Validators.required,Validators.pattern('^[0-9]{10,10}$')])),
    Department:new FormControl('',Validators.compose([Validators.required])),
    Address:new FormControl('',Validators.compose([Validators.required]))
  })
  get FirstName(){return this.DoctorRegistrationForm.get('FirstName')}
  get LastName(){return this.DoctorRegistrationForm.get('LastName')}
  get PhoneNumber(){return this.DoctorRegistrationForm.get('PhoneNumber')}
  get Department (){return this.DoctorRegistrationForm.get('Department')}
}
