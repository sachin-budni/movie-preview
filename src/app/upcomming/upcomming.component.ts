import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-upcomming',
  templateUrl: './upcomming.component.html',
  styleUrls: ['./upcomming.component.scss']
})
export class UpcommingComponent implements OnInit {

  routeName='upcommingmovies'
  $upcommingMovies:Observable<any>;

  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.pageChange(1);
    // this.$popularMovies = this.movieService.getPopularMovies(1);
  }
  pageChange(d){
    this.$upcommingMovies = this.movieService.getUpcommingMovies(d);
  }

}
