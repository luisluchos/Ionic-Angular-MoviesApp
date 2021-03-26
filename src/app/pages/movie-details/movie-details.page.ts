import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  movieDetail:Observable<any>

  constructor(private apiservice: MovieApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    let movieId = this.route.snapshot.paramMap.get('movieId')
    console.log(movieId);
    
    this.movieDetail= this.apiservice.getDetailMovie(movieId)
  }

}
