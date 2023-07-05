import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BaseComponent } from './base/base.component';
import { AdminfeedbacksComponent } from './adminfeedbacks/adminfeedbacks.component';
import { AdminpostfeedbackComponent } from './adminpostfeedback/adminpostfeedback.component';
import { AllfeedbacksComponent } from './allfeedbacks/allfeedbacks.component';
import { MaterialModule } from '../material/material.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BaseComponent,
    AdminfeedbacksComponent,
    AdminpostfeedbackComponent,
    AllfeedbacksComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
