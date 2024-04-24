import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiCallService } from '../../service/api-call.service';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {
  apiservice: any;
  constructor(private service: ApiCallService,private cookie:CookieService,private router:Router) { }

  ngOnInit(): void {  }

  logout(){
    this.cookie.delete("tokenKey");
    this.router.navigateByUrl('/adminlogin');
  }
}