import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Type } from 'src/app/model/models';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  $tvDetails: Observable<any>;
  $video: Observable<any>;
  $similarTV: Observable<any>;
  $cast: Observable<any>;
  routeName = 'popular';
  id = '';
  type: Type = 'tv';
  constructor(private route: ActivatedRoute,
              private movie: MovieService,
              private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.route.params.subscribe(s => {
      this.id = s.id;
      this.$tvDetails = this.movie.getDetails(this.id, this.type);
      this.$similarTV = this.movie.similar(this.id, 1, this.type);
      const path = window.location.pathname;
      const f1 = path.indexOf('/', 1);
      const f2 = path.substr(f1).lastIndexOf('/');
      this.routeName = path.substr(f1 + 1, f2 - 1);
      this.$cast = this.movie.getMovieCast(this.id);
    });
  }
  nextOrPreviousPage(e): void {
    this.$similarTV = this.movie.similar(this.id, e, this.type);
  }
  playTrailer(): void {
    console.log('sds');
  }

}
