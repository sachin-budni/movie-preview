import { Component, OnInit, Input, ElementRef, EventEmitter, Output } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input('Movies') $Movies;
  @Input('MovieClassName') $nameOfRoute;
  @Output() pages = new EventEmitter<any>();
  // @Output() movieDetails = new EventEmitter<number>();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  pageChange(d: number) {
    const params: Params = this.route.snapshot.queryParams;
    if (params.language) {
      this.pages.emit({
        language: params.language,
        page: d
      });
    } else {
      this.pages.emit(d);
    }
  }

}
