import { Component, Input } from '@angular/core';
import { Link } from './Link.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Input() linkList! : Link[]

  ngOnInit() {

  }

  switchChildrenVisible(index : number) {
    this.linkList[index].isChildrenVisible = !this.linkList[index].isChildrenVisible
  }
}
