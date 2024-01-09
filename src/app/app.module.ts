import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { tokenInterceptor } from './shared/interceptor/token.interceptor';
import { ListComponent } from './components/list/list.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule

  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass : tokenInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
