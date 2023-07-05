import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { AdminfeedbacksComponent } from './adminfeedbacks/adminfeedbacks.component';
import { AdminpostfeedbackComponent } from './adminpostfeedback/adminpostfeedback.component';
import { AllfeedbacksComponent } from './allfeedbacks/allfeedbacks.component';

const routes: Routes = [
  {path:"",component:BaseComponent,children:[
    {path:"yourfeedback",component:AdminfeedbacksComponent},
    {path:"givefeedback",component:AdminpostfeedbackComponent},
    {path:"allfeedbacks",component:AllfeedbacksComponent}
  ]}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
