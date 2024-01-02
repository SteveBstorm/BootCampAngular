import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.scss'
})
export class Demo1Component {
  myProp! : number[]
  myString : string = "salut"

 /*
  Propriété Cycle de vie :
    1) Déclaration => nom + type => Réserver le nom au niveau du système
    2) Initialisation => affecter une première valeur => Réserver l'espace en mémoire
    3) Affectation => Modifier la valeur de la propriété
  Toujours initialiser les propriétés avant utilisation
 */

  add() {
    console.log(this.myString.length);

    this.myProp.push(5)


  }

}
