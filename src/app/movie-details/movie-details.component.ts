import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { MovieService } from '../service/movie.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  $movieDetails: Observable<any>;
  $video: Observable<any>;

  constructor(private route: ActivatedRoute, private movie: MovieService, private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.params.subscribe(s => {
      this.$movieDetails = this.movie.getMovieDetails(s.id);
      this.setTitle(s.id);
    });
  }

  async setTitle(id) {
    const result: any = await this.movie.getMovieDetails(id).toPromise();
    const title = result.title;
    console.log(title);
    this.movie.setTitle(title);
  }

  getVideo(video: any) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video.key);
  }
  // playVideo(id) {
  //   console.log(id);
  // }
}
