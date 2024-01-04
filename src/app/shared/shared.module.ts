import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { EurtobtcPipe } from './pipes/eurtobtc.pipe';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,
    EurtobtcPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports : [
    NavbarComponent,
    EurtobtcPipe,
    FormsModule
  ]
})
export class SharedModule { }
