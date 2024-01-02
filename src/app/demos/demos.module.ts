import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';
import { DemosComponent } from './demos.component';
import { Demo1Component } from './demo1/demo1.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DemosComponent,
    Demo1Component
  ],
  imports: [
    CommonModule,
    DemosRoutingModule,
    SharedModule
  ]
})
export class DemosModule { }
