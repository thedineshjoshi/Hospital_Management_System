import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Patient } from 'src/app/Model/_patient';
import { ApiCallService } from 'src/app/service/api-call.service';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.css']
})
export class PatientViewComponent implements OnInit {
  PatientList:any;
  patient:Patient=new Patient()
  apiservice: any;
  docName:any[];
  // docName: any[] = [];
  // Did: any[]=[];
  // docName:any;/
  // docName: any
  Did:any;
  constructor(private service: ApiCallService,private cookie:CookieService,private router:Router) { }

  ngOnInit(): void {
    this.listPatients();
  }
  listPatients(){
    this.service.GetPatient().subscribe(
       res=>{
         let value= res.map((item:any)=>{
           return item.doctorId;
           
       });
       for(let i=0; i<value.length; i++){
         this.Did = value[i];
       
      this.fetchDoctorById();
        // console.log(this.Did);
      }
       this.PatientList=res;
       console.log(res)
      },
      err=>{
        console.log(err)
      }
    )
}

fetchDoctorById(){
  this.service.GetDoctorById(this.Did).subscribe(
    res=>{
      this.docName = [res];
      console.log(this.docName);
    },
    err=>{
      console.log(err);
    }
  );
  }
  }
