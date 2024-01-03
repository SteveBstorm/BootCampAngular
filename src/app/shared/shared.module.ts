import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { EurtobtcPipe } from './pipes/eurtobtc.pipe';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    EurtobtcPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports : [
    NavbarComponent,
    EurtobtcPipe
  ]
})
export class SharedModule { }
