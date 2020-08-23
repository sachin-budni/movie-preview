import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrendingChartComponent } from './trending-chart/trending-chart.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxEchartsModule } from 'ngx-echarts';
import {
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatPaginatorModule,
        MatButtonModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule
      } from '@angular/material';
import { MovieService } from './service/movie.service';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { LatestMoviesComponent } from './latest-movies/latest-movies.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { UpcommingComponent } from './upcomming/upcomming.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { MovieComponent } from './movie/movie.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieApiInterceptor } from './service/api.interceptor';
const materialModules = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule
];
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
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    materialModules,
    HttpClientModule,
    NgxEchartsModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [MovieService, {provide: HTTP_INTERCEPTORS, useClass: MovieApiInterceptor , multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
