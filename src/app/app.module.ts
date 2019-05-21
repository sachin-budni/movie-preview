import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrendingChartComponent } from './trending-chart/trending-chart.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxEchartsModule } from 'ngx-echarts';
import {
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatPaginatorModule,
        MatButtonModule
      } from '@angular/material';
import { MovieService } from './service/movie.service';
const materialModules = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatButtonModule
]
@NgModule({
  declarations: [
    AppComponent,
    TrendingChartComponent,
    PopularMoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    materialModules,
    HttpClientModule,
    NgxEchartsModule,
    MatPaginatorModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
