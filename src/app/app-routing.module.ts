import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tv', loadChildren: () => import('./pages/tv/tv.module').then(m=> m.TvModule) },
  { path: '', loadChildren: () => import('./pages/movie/movie.module').then(m=> m.MovieModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
