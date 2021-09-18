import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { MovieService } from '../../../service/movie.service';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { Type } from 'src/app/model/models';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  $movieDetails: Observable<any>;
  $video: Observable<any>;
  $similarMovies: Observable<any>;
  $movieReview: Observable<any>;
  $cast: Observable<any>;
  routeName = 'popular';
  type: Type = 'movie';
  id = '';
  constructor(private route: ActivatedRoute, private movie: MovieService, private domSanitizer: DomSanitizer) { }

  ngOnInit(): any {
    this.route.params.subscribe(s => {
      this.id = s.id;
      this.$movieDetails = this.movie.getDetails(this.id, this.type);
      this.$similarMovies = this.movie.similar(this.id, 1, this.type);
      this.$movieReview = this.movie.moviesReviews(this.id, 1);
      const path = window.location.pathname;
      const f2 = path.indexOf('/', 1);
      this.routeName = path.substr(1, f2 - 1);
      this.$cast = this.movie.getMovieCast(this.id);
    });
  }
  nextOrPreviousPage(e): void {
    this.$similarMovies = this.movie.similar(this.id, e, this.type);
  }
}
