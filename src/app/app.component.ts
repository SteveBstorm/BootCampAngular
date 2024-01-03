import { Component } from '@angular/core';
import { Link } from './shared/navbar/Link.model';

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
    ]}
  ]
}
