import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { TrendingChartComponent } from './trending-chart/trending-chart.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxEchartsModule } from 'ngx-echarts';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
  MatSlideToggleModule,
  MatTooltipModule
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
    MatCardModule,
    ReactiveFormsModule,
    ThemeModule,
    materialModules,
    HttpClientModule,
    NgxEchartsModule,
    MatPaginatorModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [MovieService, { provide: HTTP_INTERCEPTORS, useClass: MovieApiInterceptor, multi: true }, ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
