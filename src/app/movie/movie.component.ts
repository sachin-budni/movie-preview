import { Component, OnInit, Input, ElementRef, EventEmitter, Output } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input('Movies') $Movies: any;
  @Input('MovieClassName') $nameOfRoute: any;
  @Output() pages = new EventEmitter<any>();

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
