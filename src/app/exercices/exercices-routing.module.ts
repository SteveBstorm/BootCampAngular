import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exo1Component } from './exo1/exo1.component';
import { AjoutComponent } from './exo1/ajout/ajout.component';

const routes: Routes = [
   {path : 'exo1', component : Exo1Component},
    {path : 'ajoutAnimal', component : AjoutComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercicesRoutingModule { }
