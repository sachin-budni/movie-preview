import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TvListComponent } from './tv-list/tv-list.component';
const routes: Routes = [
  { path: 'popular', component: TvListComponent, data: { title: 'popular' } },
  { path: 'upcoming', component: TvListComponent, data: { title: 'upcoming' } },
  // { path: 'latest', component: LatestMoviesComponent, data: { title: 'latest' } },
  { path: 'top-rated', component: TvListComponent, data: { title: 'top-rated' } },
  { path: 'now-playing', component: TvListComponent, data: { title: 'now-playing' } },

  // { path: 'popular/:id', component: MovieDetailsComponent },
  // { path: 'upcomming/:id', component: MovieDetailsComponent },
  // { path: 'toprated/:id', component: MovieDetailsComponent },
  // { path: 'nowplaying/:id', component: MovieDetailsComponent },

  { path: '', redirectTo: 'popular', pathMatch: 'full' },
  { path: '**', redirectTo: 'popular', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TvRoutingModule { }
