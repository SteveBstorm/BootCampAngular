import { Component } from '@angular/core';
import { FakeauthService } from '../../shared/services/fakeauth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  //providers : [FakeauthService]
})
export class HomeComponent {

  isConnected! : boolean
  constructor(private service : FakeauthService){
    this.isConnected = service.isConnected
  }



}
