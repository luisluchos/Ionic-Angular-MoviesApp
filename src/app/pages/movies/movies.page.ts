import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  movies:Observable<any>
  movie:string= "Batman"

  constructor(private apiservice: MovieApiService) { }

  ngOnInit() {
    this.movies= this.apiservice.getMovies(this.movie)
console.log("movies:" ,this.movies);

  }

}
