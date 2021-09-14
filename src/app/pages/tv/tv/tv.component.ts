import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('Movies') $Movies: any;
  // tslint:disable-next-line:no-input-rename
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
