import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiCallService } from 'src/app/service/api-call.service';

@Component({
  selector: 'app-doctorsuccesslogin',
  templateUrl: './doctorsuccesslogin.component.html',
  styleUrls: ['./doctorsuccesslogin.component.css']
})
export class DoctorsuccessloginComponent implements OnInit {

  constructor(private service: ApiCallService,private cookie:CookieService,private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.cookie.delete("tokenKey");
    this.router.navigateByUrl('/adminlogin');
  }
}
