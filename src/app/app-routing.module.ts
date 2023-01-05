import { GotyComponent } from './pages/goty/goty.component';
import { InitialComponent } from './pages/initial/initial.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'initial', component: InitialComponent},
  {path: 'goty', component: GotyComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'initial'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
