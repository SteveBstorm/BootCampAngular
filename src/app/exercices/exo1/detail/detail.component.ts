import { Component, Input } from '@angular/core';
import { AnimalerieService } from '../animalerie.service';
import { Animal } from '../../animal.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  @Input() set nom(n : string) {
    this.getDetail(n)
  }

  // _test : string = "bidule"
  // //permet de modifier la valeur à retourner avant de l'utiliser
  // get test() : string {
  //   return this._test.toUpperCase()
  // }
  // //permet d'effectuer des traitement sur la valeur au moment de l'affectation
  // set test(value : string) {
  //   if(value.length > 3)
  //   this._test = value
  // }

  animalDetail! : Animal | undefined
  pere? : Animal
  mere? : Animal
  constructor(private service : AnimalerieService){}

  getDetail(nom : string) {
      this.animalDetail = this.service.getByName(nom)
      if(this.animalDetail?.parents){
        this.pere = this.animalDetail.parents.find(x => x.sexe =="male")
        this.mere = this.animalDetail.parents.find(x => x.sexe =="femelle")
      }
  }
}
