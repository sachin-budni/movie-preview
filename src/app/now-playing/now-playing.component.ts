import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../service/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss']
})
export class NowPlayingComponent implements OnInit {

  routeName='nowplayingmovies'
  $nowPlayingMovies:Observable<any>;

  constructor(private movieService:MovieService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.movieService.setTitle('Now Playing Movies');
    this.route.queryParams.subscribe(params=>{
      if(params.page){
        this.pageChange(params.page);
      }else{
        this.router.navigate(['nowplayingmovies'],{ queryParams: { page: 1 } })
      }
    })
    // this.pageChange(1);
  }
  pageChange(d){
    this.$nowPlayingMovies = this.movieService.getNowPlayingMovies(d);
  }

}
