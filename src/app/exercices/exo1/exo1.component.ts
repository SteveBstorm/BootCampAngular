import { Component } from '@angular/core';
import { AnimalerieService } from './animalerie.service';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrl: './exo1.component.scss'
})
export class Exo1Component {

  list! : Animal[]
  selectedName! : string
  constructor(private animalerie : AnimalerieService){}

  ngOnInit(){
    this.list = this.animalerie.listAnimaux
  }

  detail(nom : string) {
    this.selectedName = nom
  }

}
