import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Login } from '../Model/__login';
import { ApiCallService } from '../service/api-call.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  LoginRequest:Login=new Login();

  constructor(private apiService:ApiCallService,private cookie:CookieService,private router:Router) {}

  ngOnInit(): void {}
  doLogin(){
    this.apiService.Login(this.LoginRequest).subscribe(
      res=>{
        this.cookie.set("tokenKey",res.token);
        this.router.navigateByUrl('/adminview');

      }
    );
  }


}
