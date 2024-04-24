import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Login } from '../Model/__login';
import {ApiCallService}from  '../service/api-call.service';

@Component({
  selector: 'app-doctorlogin',
  templateUrl: './doctorlogin.component.html',
  styleUrls: ['./doctorlogin.component.css']
})
export class DoctorloginComponent implements OnInit {
  LoginRequest:Login=new Login();

  constructor(private apiService:ApiCallService,private cookie:CookieService,private router:Router) { }

  ngOnInit(): void {
  }
  Login(){
    this.apiService.Login(this.LoginRequest).subscribe(
      res=>{
        this.cookie.set("tokenKey",res.token);
        this.router.navigateByUrl('/doctorsuccesslogin');
     })
      ,
      err=>{
        console.log(err)
      }
  }
}
