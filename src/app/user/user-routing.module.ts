import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserbaseComponent } from './userbase/userbase.component';
import { UserfeedbacksComponent } from './userfeedbacks/userfeedbacks.component';
import { PostfeedbackComponent } from './postfeedback/postfeedback.component';

const routes: Routes = [
  {path:"",component:UserbaseComponent,children:[
    {path:"yourfeedback",component:UserfeedbacksComponent},
    {path:"givefeedback",component:PostfeedbackComponent}
  ]} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
