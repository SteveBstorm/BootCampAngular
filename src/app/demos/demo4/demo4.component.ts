import { Component } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrl: './demo4.component.scss'
})
export class Demo4Component {

  myProp : string = "Est-ce que vous avez bien mangé à midi ?"

  reponseDeChildren! : string

  getResponse(resp : boolean) {
    this.reponseDeChildren = resp ? "Oui" : "Non"
  }
}
