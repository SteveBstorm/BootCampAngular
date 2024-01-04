import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path : 'demos', loadChildren: () => import('./demos/demos.module').then(m => m.DemosModule)},
  { path : 'home', component : HomeComponent},
  { path : 'exos', loadChildren: () => import('./exercices/exercices.module').then(m => m.ExercicesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
