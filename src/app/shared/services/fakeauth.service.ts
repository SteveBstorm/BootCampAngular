import { Injectable, Signal, signal } from '@angular/core';
import { Demo1Component } from '../../demos/demo1/demo1.component';
import { DemosModule } from '../../demos/demos.module';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/*
  grâce à providedIn : 'root', l'instance du service est un singleton au niveau
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

  /*
    BehaviorSubject contrairement à son grand frère demande une valeur par défaut
    à la construction qu'il émet directement dés qu'il y a abonnements
  */
  //isConnectedSubject : Subject<boolean> = new Subject<boolean>()
  isConnectedSubject : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isConnected)

  login() {
    localStorage.setItem("token", "monsupertoken")
    sessionStorage.setItem("token", "monsupertoken")
    this.isConnected = true
    this.isConnectedSubject.next(this.isConnected)
  }

  logout() {
    this.isConnected = false
    this.isConnectedSubject.next(this.isConnected)
  }

}
