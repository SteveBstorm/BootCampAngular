import { Component } from '@angular/core';
import { Animal } from '../../animal.model';
import { AnimalerieService } from '../animalerie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrl: './ajout.component.scss'
})
export class AjoutComponent {

  newAnimal : Animal = {}

  pereList! : Animal[]
  mereList! : Animal[]

  pere! : string
  mere! : string
  constructor(
    private service : AnimalerieService,
    private router : Router
    ){}

  creation() {
    this.service.ajout(this.newAnimal)
  }

  choixRace(){
    let race : string = this.newAnimal.race ?? ''
    this.pereList = this.service.listAnimaux.filter(a => a.race == race && a.sexe == "male")
    this.mereList = this.service.listAnimaux.filter(a => a.race == race && a.sexe == "femelle")
  }

  validation() {
    this.newAnimal.parents = []
    this.newAnimal.parents?.push(this.pereList.find(x => x.nom == this.pere) ?? {})
    this.newAnimal.parents?.push(this.mereList.find(x => x.nom == this.mere) ?? {})
    console.log(this.newAnimal)
    this.service.ajout(this.newAnimal)
    this.router.navigate(['./exos/exo1'])
  }

  test() {
    console.log(this.pere)
  }
}
