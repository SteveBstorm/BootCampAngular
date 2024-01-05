import { Component } from '@angular/core';
import { FakeauthService } from '../../shared/services/fakeauth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  //providers : [FakeauthService]
})
export class HomeComponent {

  isConnected! : boolean

  mySub! : Subscription
  constructor(private service : FakeauthService){}

  ngOnInit() {
    this.mySub = this.service.isConnectedSubject.subscribe({
      next : (data : boolean) => this.isConnected = data
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.mySub.unsubscribe()
    console.log("destroy")
  }



}
