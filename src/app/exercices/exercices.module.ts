import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercicesRoutingModule } from './exercices-routing.module';
import { Exo1Component } from './exo1/exo1.component';
import { DetailComponent } from './exo1/detail/detail.component';
import { AjoutComponent } from './exo1/ajout/ajout.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    Exo1Component,
    DetailComponent,
    AjoutComponent
  ],
  imports: [
    CommonModule,
    ExercicesRoutingModule,
    SharedModule
  ]
})
export class ExercicesModule { }
