import { Component, OnInit, Input, ElementRef, EventEmitter, Output } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  getMovieDetails(id: number) {
  }

  pageChange(d: number) {
    const params = this.route.snapshot.queryParams;
    const paramObj = {} as any;
    if (params.language) {
      paramObj.language = params.language;
      paramObj.page = d;
      this.pages.emit(paramObj);
    } else {
      this.pages.emit(d);
    }
  }

}
