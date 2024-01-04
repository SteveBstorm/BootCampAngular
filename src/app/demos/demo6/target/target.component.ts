import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrl: './target.component.scss'
})
export class TargetComponent {
  param! : number

  constructor(private ar : ActivatedRoute) {

  }
  ngOnInit(){
    this.param = this.ar.snapshot.params['parametre']
  }
}
