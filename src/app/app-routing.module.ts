import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { RegisterComponent } from './shared/auth/register/register.component';
import { authGuard } from './shared/guard/auth.guard';
import { ListComponent } from './components/list/list.component';
import { callResolver } from './shared/resolver/call.resolver';

const routes: Routes = [
  { path : '', redirectTo: 'home', pathMatch : 'full'},
  { path : 'demos', loadChildren: () => import('./demos/demos.module').then(m => m.DemosModule)},
  { path : 'home', component : HomeComponent},
  { path : 'exos', loadChildren: () => import('./exercices/exercices.module').then(m => m.ExercicesModule)},
  { path : 'register', canActivate : [authGuard], component : RegisterComponent},
  { path : 'list/:lettre', resolve : {maListe : callResolver} , component : ListComponent},
  { path : '404', component: NotfoundComponent},
  { path : '**', redirectTo : '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
