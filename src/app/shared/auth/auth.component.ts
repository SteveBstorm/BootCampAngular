import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  login! : string
  pwd! : string

  constructor(private service : AuthService){}

  register() {
    this.service.login(this.login, this.pwd)
  }
}
