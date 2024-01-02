import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.scss'
})
export class Demo1Component {
   myProp: number[] = []
   myString : string | null = "salut"
  truc : any = {nom : "steve", grade : 1} //any à utiliser avec parcimonie (la pote de modération)

 /*
  Propriété Cycle de vie :
    1) Déclaration => nom + type => Réserver le nom au niveau du système
    2) Initialisation => affecter une première valeur => Réserver l'espace en mémoire
    3) Affectation => Modifier la valeur de la propriété
  Toujours initialiser les propriétés avant utilisation
 */

  add() {
     console.log(this.myString?.length);

     this.myProp.push(5)
    this.myString = null
    //this.truc.push("hello")
  }

  /*
    Code pour la démo Attribute Binding
  */
  monImage : string = "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"

  value : number = 5
  plus() {
    this.value++
  }
  moins() {
    this.value--
  }

}
