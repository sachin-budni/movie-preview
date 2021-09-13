import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LatestMoviesComponent } from './latest-movies/latest-movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { PopularTvShowComponent } from './popular-tv-show/popular-tv-show.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { TrendingChartComponent } from './trending-chart/trending-chart.component';
import { UpcommingComponent } from './upcomming/upcomming.component';


const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'trendingchart', component: TrendingChartComponent, data: { title: 'trendingchart' } },
  { path: 'popularmovies', component: PopularMoviesComponent, data: { title: 'popularmovies' } },
  { path: 'upcommingmovies', component: PopularMoviesComponent, data: { title: 'upcommingmovies' } },
  // { path: 'upcommingmovies', component: UpcommingComponent },
  { path: 'latestmovies', component: LatestMoviesComponent },
  { path: 'topratedmovies', component: TopRatedComponent },
  { path: 'nowplayingmovies', component: NowPlayingComponent },

  { path: 'popular-tv-shows', component: PopularTvShowComponent },

  { path: 'popularmovies/:id', component: MovieDetailsComponent },
  { path: 'upcommingmovies/:id', component: MovieDetailsComponent },
  { path: 'topratedmovies/:id', component: MovieDetailsComponent },
  { path: 'nowplayingmovies/:id', component: MovieDetailsComponent },

  { path: '**', redirectTo: '/popularmovies', pathMatch: 'full' },
  { path: '', redirectTo: '/popularmovies', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
