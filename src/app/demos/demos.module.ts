import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';
import { DemosComponent } from './demos.component';
import { Demo1Component } from './demo1/demo1.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';
import { ChildrenComponent } from './demo4/children/children.component';
import { Demo5Component } from './demo5/demo5.component';
import { FakeauthService } from '../shared/services/fakeauth.service';


@NgModule({
  declarations: [
    DemosComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    ChildrenComponent,
    Demo5Component
  ],
  imports: [
    CommonModule,
    DemosRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers : [
    //FakeauthService
  ]
})
export class DemosModule { }
