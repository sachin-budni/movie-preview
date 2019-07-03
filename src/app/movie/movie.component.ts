import { Component, OnInit, Input, ElementRef, EventEmitter, Output} from '@angular/core';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input('Movies') $Movies;
  @Input('MovieClassName') $nameOfRoute;
  @Output() pages = new EventEmitter<number>();
  // @Output() movieDetails = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  getMovieDetails(id:number){
  }

  pageChange(d:number){
    this.pages.emit(d);
  }

}
