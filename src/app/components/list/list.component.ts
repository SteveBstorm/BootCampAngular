import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  list! : any[] | string

  // constructor(private authService : AuthService) {
  //   this.authService.getAll().subscribe({
  //     next : (data : any[]) => this.list = data
  //   })

  // }

  constructor(private ar : ActivatedRoute){
    this.list = this.ar.snapshot.data['maListe']
    console.log(this.list.length)
  }
}
