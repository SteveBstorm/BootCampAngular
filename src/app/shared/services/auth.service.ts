import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import * as jwt_decode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = "http://localhost:3000/api/v1/"

  get status() : boolean {
    return localStorage.getItem("token") ? true : false
  }

  statusSubject : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.status)

  constructor(
    private client : HttpClient,
    private router : Router
    ) { }

    /* pour lire le contenu d'un jwt => npm i jwt-decode*/
  login(login: string, pwd : string) {
    this.client.post<any>(this.url+"auth/login", {login, pwd}).subscribe({
      next : (token : any) => {
        console.log(token)
        let decoded = jwt_decode.jwtDecode(token.jwt)
        console.log(decoded);
        let expire : Date = new Date((decoded.exp ?? 0)*1000)
        console.log(expire);

        localStorage.setItem("token", token.jwt)
        this.statusSubject.next(this.status)
        this.router.navigate(["home"])
      }
    })
  }

  logout() {
    localStorage.clear()
    this.statusSubject.next(this.status)
  }

  register(login: string, pwd : string) {
    this.client.post(this.url+"auth/register", {login, pwd}).subscribe({
      next : () => {console.log("Cool j'suis enregistré")},
      error : (error) => {console.log(error)},
      complete : () => {console.log("j'ai fini");
      }
    })
  }

  getAll() {
    // let myHeaders : HttpHeaders =
    //   new HttpHeaders({"authorization" : "bearer "+ localStorage.getItem("token")})
    this.client.get<any>(this.url+"employees"/*, {headers : myHeaders}*/).subscribe({
      next : (data : any) => console.log(data)
    })
  }

  getOne() {
    //utilisation de l'interceptor
    this.client.get<any>(this.url+"employees/2").subscribe({
      next : (data : any) => console.log(data)
    })
  }
}
