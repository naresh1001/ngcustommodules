import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentregisterComponent } from './studentregister/studentregister.component';

@NgModule({
  declarations: [StudentregisterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    StudentregisterComponent
  ]
})
export class StudentsModule { }
