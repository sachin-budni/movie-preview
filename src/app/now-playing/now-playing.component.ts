import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss']
})
export class NowPlayingComponent implements OnInit {

  routeName='nowplayingmovies'
  $nowPlayingMovies:Observable<any>;

  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.pageChange(1);
  }
  pageChange(d){
    this.$nowPlayingMovies = this.movieService.getNowPlayingMovies(d);
  }

}
