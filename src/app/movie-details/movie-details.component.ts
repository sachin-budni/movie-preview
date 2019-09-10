import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { MovieService } from '../service/movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  $movieDetails:Observable<any>;

  constructor(private route:ActivatedRoute,private movieService:MovieService) { }

  ngOnInit() {
    this.route.params.subscribe(s=>{
      this.$movieDetails = this.movieService.getMovieDetails(s.id);
    })
  }

}
