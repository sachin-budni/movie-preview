import { Component, OnInit, Input, ElementRef, EventEmitter, Output } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('Movies') $Movies: any;
  // tslint:disable-next-line: no-input-rename
  @Input('MovieClassName') $nameOfRoute: any;
  @Output() pages = new EventEmitter<any>();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): any {
  }

  pageChange(d: number): any {
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
