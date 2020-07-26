import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-nav',
  templateUrl: './movie-nav.component.html',
  styleUrls: ['./movie-nav.component.scss']
})
export class MovieNavComponent implements OnInit {
  tvShows: Observable<any>;
  routeName = 'movie';
  constructor(private movie: MovieService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.movie.setTitle('Top-Rated TV shows');
    this.setRouting();
  }

  setRouting() {
    this.movie.setRoutingNavigation(this.routeName);
  }

}
