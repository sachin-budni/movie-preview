import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TrendingChartComponent } from './trending-chart/trending-chart.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { LatestMoviesComponent } from './latest-movies/latest-movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieLayoutComponent } from './movie-layout/movie-layout.component';
const routes: Routes = [
  { path: 'movie', component: MovieLayoutComponent, children: [
      { path: 'trendingchart', component: TrendingChartComponent, data: { title: 'trendingchart' } },
      { path: 'popular', component: MovieListComponent, data: { title: 'popular' } },
      { path: 'upcoming', component: MovieListComponent, data: { title: 'upcoming' } },
      { path: 'latest', component: LatestMoviesComponent, data: { title: 'latest' } },
      { path: 'top-rated', component: MovieListComponent, data: { title: 'top-rated' } },
      { path: 'now-playing', component: MovieListComponent, data: { title: 'now-playing' } },
      { path: 'popular/:id', component: MovieDetailsComponent },
      { path: 'upcoming/:id', component: MovieDetailsComponent },
      { path: 'top-rated/:id', component: MovieDetailsComponent },
      { path: 'now-playing/:id', component: MovieDetailsComponent },
      { path: '', redirectTo: 'popular', pathMatch: 'full' },
      { path: '**', redirectTo: 'popular', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: 'movie', pathMatch: 'full' },
  { path: '**', redirectTo: 'movie', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
