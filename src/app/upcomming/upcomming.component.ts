import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../service/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-upcomming',
  templateUrl: './upcomming.component.html',
  styleUrls: ['./upcomming.component.scss']
})
export class UpcommingComponent implements OnInit {

  routeName = 'upcommingmovies';
  $upcommingMovies: Observable<any>;

  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.movieService.setTitle('Upcoming Movies');
    this.route.queryParams.subscribe(params => {
      if (params.page) {
        this.pageChange(params.page);
      } else {
        this.router.navigate(['upcommingmovies'], { queryParams: { page: 1 } });
      }
    });
  }
  pageChange(d) {
    this.$upcommingMovies = this.movieService.getUpcommingMovies(d);
  }

}
