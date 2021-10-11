import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { MovieService } from '../../../service/movie.service';
import { Observable, of } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  $movieDetails: Observable<any> = of();
  $video: Observable<any> = of();
  $similarMovies: Observable<any> = of();
  $movieReview: Observable<any> = of();
  $cast: Observable<any> = of();
  routeName: any = 'popular';
  type: any = 'movie';
  id: any = '';
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
      this.setTitle();
    });
  }

  async setTitle(): Promise<void> {
    const result = await this.movie.getDetails(this.id, this.type).toPromise();
    console.log(result);
    this.movie.setTitle(result.title);
  }
  nextOrPreviousPage(e: any): void {
    this.$similarMovies = this.movie.similar(this.id, e, this.type);
  }
}
