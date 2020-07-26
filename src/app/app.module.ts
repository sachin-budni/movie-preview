import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrendingChartComponent } from './trending-chart/trending-chart.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxEchartsModule } from 'ngx-echarts';
import { MovieService } from './service/movie.service';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { LatestMoviesComponent } from './latest-movies/latest-movies.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { UpcommingComponent } from './upcomming/upcomming.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { MovieComponent } from './movie/movie.component';
import { DemoMaterialModule } from './material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MovieNavComponent } from './movie-nav/movie-nav.component';
import { TvNavComponent } from './tv-nav/tv-nav.component';
import { PeopleNavComponent } from './people-nav/people-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    TrendingChartComponent,
    PopularMoviesComponent,
    MovieDetailsComponent,
    LatestMoviesComponent,
    TopRatedComponent,
    UpcommingComponent,
    NowPlayingComponent,
    MovieComponent,
    MovieNavComponent,
    TvNavComponent,
    PeopleNavComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxEchartsModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
