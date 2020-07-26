import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { MovieService } from '../service/movie.service';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  $movieDetails: Observable<any>;

  constructor(private route: ActivatedRoute, private movieService: MovieService, private meta: Meta, private title: Title) { }

  ngOnInit() {
    this.route.params.subscribe(s => {
      this.$movieDetails = this.movieService.getMovieDetails(s.id);
      this.$movieDetails.subscribe((movie: Movie) => {
        this.title.setTitle(movie.title);
        this.meta.addTags([
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: window.location.pathname },
          { property: 'og:title', content: movie.title },
          { property: 'og:description', content: movie.overview },
          { property: 'og:image', content: 'https://image.tmdb.org/t/p/w500' + movie.poster_path }
        ]);
      });
    });
  }

}
