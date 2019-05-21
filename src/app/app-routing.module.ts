import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrendingChartComponent } from './trending-chart/trending-chart.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';

const routes: Routes = [
  {path:'trendingchart',component:TrendingChartComponent},
  {path:'popularmovies',component:PopularMoviesComponent},
  {path:'**',redirectTo:'/trendingchart',pathMatch:'full'},
  {path:'',redirectTo:'/trendingchart',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
