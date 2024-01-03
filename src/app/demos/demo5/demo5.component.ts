import { Component } from '@angular/core';
import { FakeauthService } from '../../shared/services/fakeauth.service';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrl: './demo5.component.scss'
})
export class Demo5Component {

  isConnected! : boolean
  constructor(private service : FakeauthService){
    this.isConnected = service.isConnected
  }

  login() {
    this.service.login()
    this.isConnected = this.service.isConnected

  }

  logout(){
    this.service.logout()
    this.isConnected = this.service.isConnected

  }
}
