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
        MatSelectModule,
        MatSlideToggleModule
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
import { ThemeModule } from './theme/theme.module';
import { ThemeService } from './theme/theme.service';
import { VideoPipe } from './pipes/video.pipe';
const materialModules = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule
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
    VideoPipe,
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
    MatSelectModule,
    ThemeModule
  ],
  providers: [MovieService, {provide: HTTP_INTERCEPTORS, useClass: MovieApiInterceptor , multi: true}, ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
