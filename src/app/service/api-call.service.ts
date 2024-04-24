import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Doctor } from '../Model/_doctor';
import { Patient } from '../Model/_patient';
import { Login } from '../Model/__login';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor( private http:HttpClient) {}
    PostDoctor(doctor:Doctor):Observable<any>{
        return this.http.post("https://localhost:7197/api/Doctor/PostDoctor",doctor,{responseType:'json'})
    }
    PostPatient(patient:Patient,doctorID:any):Observable<any>{
        return this.http.post("https://localhost:7197/api/Patient/PostPatient/"+doctorID,patient,{responseType:'json'})
  }
    GetDoctor():Observable<any>{
    return this.http.get("https://localhost:7197/api/Doctor/GetDoctor",{responseType:'json'})
  }
   GetDoctorById(id:any):Observable<any>{
   return this.http.get("https://localhost:7197/api/Doctor/GetDoctorById/"+id,{responseType:'json'})
  // }
  // GetDoctorById(id:any):Observable<any>{
  //   return this.http.get("https://localhost:7197/api/Doctor/"+id,{responseType:'json'})
  }
   GetPatients(id:any):Observable<any>{
     return this.http.get("https://localhost:7197/api/Doctor/"+id,{responseType:'json'})
   }
  UpdateDoctor(id:any,doctor=Doctor):Observable<any>{
    return this.http.put("https://localhost:7197/api/Doctor/"+id,doctor,{responseType:'json'})
  }
  DeleteDoctor(id:any):Observable<any>{
    return this.http.delete("https:localhost:7197/api/Doctor/"+id,{responseType:'json'})
  }
  GetPatient():Observable<any>{
    return this.http.get("https://localhost:7197/api/Patient/GetPatient/",{responseType:'json'})
  }
  Login(LoginRequest:Login):Observable<any>{
    return this.http.post("https://localhost:7197/api/Authentication/Login",LoginRequest,{responseType:'json'})
  }
   }
