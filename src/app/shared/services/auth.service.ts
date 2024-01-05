import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = "http://localhost:3000/api/v1/"
  constructor(private client : HttpClient) { }

  login(login: string, pwd : string) {
    this.client.post<any>(this.url+"auth/login", {login, pwd}).subscribe({
      next : (token : any) => {
        console.log(token)
        localStorage.setItem("token", token.jwt)
      }
    })
  }

  logout() {

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
    let myHeaders : HttpHeaders =
      new HttpHeaders({"authorization" : "bearer "+ localStorage.getItem("token")})
    this.client.get<any>(this.url+"employees", {headers : myHeaders}).subscribe({
      next : (data : any) => console.log(data)
    })
  }
}
