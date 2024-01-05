import { Component } from '@angular/core';
import { Link } from './shared/navbar/Link.model';
import { FakeauthService } from './shared/services/fakeauth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BootCampDemoAngular';

  listLien : Link[] = [
    {title : "Home", url : "home"},
    {title : "Démos", children : [
      {title : "Bindings", url: "demos/demo1"},
      {title : "Directives", url: "demos/demo2"},
      {title : "Custom Pipes", url: "demos/demo3"},
      {title : "@Input/@Output", url: "demos/demo4"},
      {title : "Service & Injection", url: "demos/demo5"},
      {title : "Routing", url: "demos/demo6"},
    ]},
    {title: "Exercices", children : [
      {title : "Animalerie", url: "exos/exo1"}
    ]}
  ]


}
