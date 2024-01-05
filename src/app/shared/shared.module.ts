import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { EurtobtcPipe } from './pipes/eurtobtc.pipe';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './auth/register/register.component';



@NgModule({
  declarations: [
    NavbarComponent,
    EurtobtcPipe,
    NotfoundComponent,
    AuthComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  exports : [
    NavbarComponent,
    EurtobtcPipe,
    FormsModule,
    AuthComponent,
    HttpClientModule,
    RegisterComponent
  ]
})
export class SharedModule { }
