import { Component, OnInit, Input, ElementRef, EventEmitter, Output} from '@angular/core';
import { MovieService } from '../service/movie.service';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movies: any;
  routesName: any;
  locationPath: string;
  @Input('Movies') set AllMovies(value: any) {
    // this.movies = value;
  }
  @Input('MovieClassName') set nameOfRoute(value: string) {
    this.routesName = value;
    this.locationPath = window.location.pathname;
    if (value.includes('tv') || value.includes('movie') || value.includes('person')) {
      const page = window.location.search;
      if (page.includes('page')) {
        this.movies = this.movie.getMovies(this.locationPath, page.substring(6, page.length));
      } else {
        this.router.navigate([this.locationPath], {queryParams : {page: 1}});
      }
    }
  }

  constructor(private movie: MovieService, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  ngOnInit() {
  }

}
