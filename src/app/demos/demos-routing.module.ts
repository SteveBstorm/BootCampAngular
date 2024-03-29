import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemosComponent } from './demos.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';
import { Demo5Component } from './demo5/demo5.component';
import { Demo6Component } from './demo6/demo6.component';
import { TargetComponent } from './demo6/target/target.component';
import { demo6valueGuard } from '../shared/guard/demo6value.guard';

const routes: Routes = [
  {path : '', component : DemosComponent, children : [
    {path: 'demo1', component : Demo1Component},
    {path: 'demo2', component : Demo2Component},
    {path: 'demo3', component : Demo3Component},
    {path: 'demo4', component : Demo4Component},
    {path: 'demo5', component : Demo5Component},
    {path: 'demo6', component : Demo6Component},
    {path: 'target/:parametre', canActivate : [demo6valueGuard], component : TargetComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule { }
