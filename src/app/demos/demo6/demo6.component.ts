import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrl: './demo6.component.scss'
})
export class Demo6Component {

  constructor(private router : Router){}

  redirection(){

    this.router.navigate(['./demos/target/27'])

  }
}
