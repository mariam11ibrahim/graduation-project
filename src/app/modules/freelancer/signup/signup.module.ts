import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HomeComponent } from './home/home.component';


const routes:Routes=[

  ];
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class post-jobModule { }