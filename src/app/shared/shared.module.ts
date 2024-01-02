import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { EurtobtcPipe } from './pipes/eurtobtc.pipe';



@NgModule({
  declarations: [
    NavbarComponent,
    EurtobtcPipe
  ],
  imports: [
    CommonModule
  ],
  exports : [
    NavbarComponent,
    EurtobtcPipe
  ]
})
export class SharedModule { }
