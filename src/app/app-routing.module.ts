import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'movie', loadChildren: () => import('./pages/movie/movie.module').then(m => m.MovieModule) },
  { path: 'tv', loadChildren: () => import('./pages/tv/tv.module').then(m => m.TvModule) },
  { path: '', redirectTo: '/movie', pathMatch: 'full' },
  { path: '**', redirectTo: '/movie', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
