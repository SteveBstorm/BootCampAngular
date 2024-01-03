import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Link } from '../../../shared/navbar/Link.model';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrl: './children.component.scss'
})
export class ChildrenComponent {

  @Input() valeur! : string

  @Output() reponseEvent : EventEmitter<boolean> = new EventEmitter<boolean>()

  reponse(resp : boolean) {
    this.reponseEvent.emit(resp)
  }

  list : Link[] = [
    {title : "action 1", url : "la bonne"},
    {title : "action 2", url : "une autre"},
  ]
}
