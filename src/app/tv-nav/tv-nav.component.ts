import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tv-nav',
  templateUrl: './tv-nav.component.html',
  styleUrls: ['./tv-nav.component.scss']
})
export class TvNavComponent implements OnInit {
  routeName = 'tv';
  constructor(private movie: MovieService) { }

  ngOnInit() {
    this.movie.setTitle('Top-Rated TV shows');
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    this.setRouting();
  }
  setRouting() {
    this.movie.setRoutingNavigation('tv');
  }
}
