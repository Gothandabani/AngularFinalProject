import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserbaseComponent } from './userbase/userbase.component';
import { UserfeedbacksComponent } from './userfeedbacks/userfeedbacks.component';
import { PostfeedbackComponent } from './postfeedback/postfeedback.component';
import { MaterialModule } from '../material/material.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [
    UserbaseComponent,
    UserfeedbacksComponent,
    PostfeedbackComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,    
    MaterialModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule
  ]
})
export class UserModule { }
