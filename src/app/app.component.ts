import { Component } from '@angular/core';
import{FormControl,FormGroup,Validators}from'@angular/forms'
import { Doctor } from './Model/_doctor';
import { ApiCallService } from './service/api-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  doctor:Doctor= new Doctor();
  title = 'HMS';
  constructor (){}
  }
