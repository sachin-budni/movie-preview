import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrendingChartComponent } from './trending-chart/trending-chart.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { LatestMoviesComponent } from './latest-movies/latest-movies.component';
import { UpcommingComponent } from './upcomming/upcomming.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  {path:'trendingchart',component:TrendingChartComponent},
  {path:'popularmovies',component:PopularMoviesComponent},
  {path:'latestmovies',component:LatestMoviesComponent},
  {path:'upcommingmovies',component:UpcommingComponent},
  {path:'topratedmovies',component:TopRatedComponent},
  {path:'nowplayingmovies',component:NowPlayingComponent},

  {path:'popularmovies/:id',component:MovieDetailsComponent},
  {path:'upcommingmovies/:id',component:MovieDetailsComponent},
  {path:'topratedmovies/:id',component:MovieDetailsComponent},
  {path:'nowplayingmovies/:id',component:MovieDetailsComponent},
  
  {path:'**',redirectTo:'/trendingchart',pathMatch:'full'},
  {path:'',redirectTo:'/trendingchart',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
