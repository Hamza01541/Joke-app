import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JokeListComponent, JokeDetailComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/joke-list',
    pathMatch: 'full'
  },
  {
    path: 'joke-list',
    component: JokeListComponent
  },
  {
    path: 'joke-detail',
    component: JokeDetailComponent
  },
  {
    path: '**',
    redirectTo: '/joke-list'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
