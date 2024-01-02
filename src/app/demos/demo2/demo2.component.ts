import { Component } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrl: './demo2.component.scss'
})
export class Demo2Component {
  /* Code demo IF / ngIf */
  isVisible : boolean = false

  switchVisible() {
    this.isVisible = !this.isVisible
  }

  /*
  Code demo For / ngFor
  */

  tab : string[] = ["Arthur", "Perceval", "Merlin", "Leodagan"]

  value! : number
}
