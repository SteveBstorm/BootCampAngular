import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';

const routes: Routes = [
  { path : '', redirectTo: 'home', pathMatch : 'full'},
  { path : 'demos', loadChildren: () => import('./demos/demos.module').then(m => m.DemosModule)},
  { path : 'home', component : HomeComponent},
  { path : 'exos', loadChildren: () => import('./exercices/exercices.module').then(m => m.ExercicesModule)},
  { path : '404', component: NotfoundComponent},
  { path : '**', redirectTo : '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
