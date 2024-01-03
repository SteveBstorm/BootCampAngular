import { Component } from '@angular/core';
import { Link } from './Link.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  linkList! : Link[]

  ngOnInit() {
    this.linkList = [
      {title : "Home", url : "home"},
      {title : "Démos", children : [
        {title : "Bindings", url: "demos/demo1"},
        {title : "Directives", url: "demos/demo2"},
        {title : "Custom Pipes", url: "demos/demo3"},
      ]}
    ]
  }

  switchChildrenVisible(index : number) {
    this.linkList[index].isChildrenVisible = !this.linkList[index].isChildrenVisible
  }
}
