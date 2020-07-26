import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-people-nav',
  templateUrl: './people-nav.component.html',
  styleUrls: ['./people-nav.component.scss']
})
export class PeopleNavComponent implements OnInit {

  routeName = 'tv';
  constructor(private movie: MovieService) { }

  ngOnInit() {
    this.movie.setTitle('Top-Rated TV shows');
    this.setRouting();
  }
  setRouting() {
    this.movie.setRoutingNavigation('person');
  }

}
