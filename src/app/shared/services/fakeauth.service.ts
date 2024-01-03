import { Injectable } from '@angular/core';
import { Demo1Component } from '../../demos/demo1/demo1.component';
import { DemosModule } from '../../demos/demos.module';

@Injectable({
  providedIn: 'root'
})
/*
  grâce à providedIn : 'roor', l'instance du service est un singleton au niveau
  global de l'application
  possilité en changeant le providedIn par un module ou un composant, de limité
  l'existence du service à cette partie de l'app
*/
export class FakeauthService {

  // instance! : FakeauthService

  // getInstance() : FakeauthService {
  //   if(this.instance != null) return this.instance
  //   return new FakeauthService()
  // }

  isConnected : boolean = true

  login() {
    this.isConnected = true
  }

  logout() {
    this.isConnected = false
  }
}
