import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { VideoComponent } from 'src/app/components/video/video.component';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  $tvDetails: Observable<any> = of();
  $video: Observable<any> = of();
  $similarTV: Observable<any> = of();
  $cast: Observable<any> = of();
  routeName: any = 'popular';
  id: any = '';
  type: any = 'tv';
  constructor(private route: ActivatedRoute,
              private movie: MovieService,
              private domSanitizer: DomSanitizer,
              private dialog: MatDialog) { }

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
  nextOrPreviousPage(e: any): void {
    this.$similarTV = this.movie.similar(this.id, e, this.type);
  }
  playTrailer(video: any): void {
    console.log(video);
    let dialogRef = this.dialog.open(VideoComponent, {
      width: '800px',
      data: {video},
      panelClass: 'video-dailog'
    });
  }

}
