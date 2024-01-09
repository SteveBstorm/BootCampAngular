import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  login! : string
  pwd! : string

  constructor(private service : AuthService){}

  register() {
    this.service.register(this.login, this.pwd)
  }

}
