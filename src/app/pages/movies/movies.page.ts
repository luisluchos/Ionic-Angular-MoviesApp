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
  searchMovie:string= ""

  constructor(private apiservice: MovieApiService) { }

  ngOnInit() {
    
  }
search(event){
  let searchMovie: string = event.target.value
  this.movies= this.apiservice.getMovies(searchMovie)
}

}
