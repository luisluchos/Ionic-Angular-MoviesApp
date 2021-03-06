import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  url= "http://www.omdbapi.com/"
  key= "457c0eea"
  
  constructor(private http: HttpClient) { }

  getMovies(title:string): Observable<any> {
    return this.http.get(`${this.url}?apiKey=${this.key}&s=${title}`)
    .pipe(
      map(data => data['Search']))
  }

  getDetailMovie(id:string): Observable<any> {
      return this.http.get(`${this.url}?apiKey=${this.key}&i=${id}`) 
    }

}
