import { Injectable } from '@angular/core';
import { Animal} from '../animal.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalerieService {

  listAnimaux : Animal[] = [
    {nom : "Garfield", race : "chat", age: 42, sexe: "male", couleur : "roux"},
    {nom : "Perry", race : 'ornithorynque', age: 8, sexe: "male", couleur : "bleu"},
    {nom : "Minou", race : "chat", age: 8, sexe: "femelle", couleur : "rose"},
    {nom : "Pakkun", race : 'chien', age: 5, sexe: "male", couleur : "noir"},
    {nom : "Chatounet", race : "chat", sexe: "male", age : 1, couleur : "vert", parents : [
      {nom : "Garfield", race : "chat", age: 42, sexe: "male", couleur : "roux"},
      {nom : "Minou", race : "chat", age: 8, sexe: "femelle", couleur : "rose"}
    ]}
  ]
  constructor() { }

  ajout(newAnimal : Animal){
    this.listAnimaux.push(newAnimal)
  }

  getByName(nom : string) : Animal | undefined {
    return this.listAnimaux.find(a => a.nom == nom)
  }

}
