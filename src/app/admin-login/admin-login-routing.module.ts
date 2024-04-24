import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminviewComponent } from './adminview/adminview.component';
const routes: Routes = [
  {path:'adminview',component:AdminviewComponent}
    // {path:'adminlogin',component:AdminviewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class adminloginroutingModule { }
