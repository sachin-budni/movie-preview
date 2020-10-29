import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { MovieService } from '../service/movie.service';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  $movieDetails: Observable<any>;
  $video: Observable<any>;
  $similarMovies: Observable<any>;
  routeName = 'popularmovies';
  id = '';
  constructor(private route: ActivatedRoute, private movie: MovieService, private domSanitizer: DomSanitizer) { }

  ngOnInit(): any {
    this.route.params.subscribe(s => {
      this.$movieDetails = this.movie.getMovieDetails(s.id);
      this.$similarMovies = this.movie.similarMovies(s.id, 1);
      const path = window.location.pathname;
      const f2 = path.indexOf('/', 1);
      this.routeName = path.substr(1, f2 - 1);
      this.id = s.id;
    });
  }
  nextOrPreviousPage(e): void {
    this.$similarMovies = this.movie.similarMovies(this.id, e);
  }
}
