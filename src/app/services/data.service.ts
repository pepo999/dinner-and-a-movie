import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  API_URL = "https://6436c5228205915d34fc6fd5.mockapi.io/movies-and-dinners"

  constructor(private http: HttpClient) { }

  getDinnersAndMovies() {
    return this.http.get<any[]>(`${this.API_URL}`);
  }

  addMovie(movie: any): any {
    return this.http.post<any>(this.API_URL, movie)
      .pipe(
        switchMap(() => this.getDinnersAndMovies())
      );
  }

  delete(movie: any) {
    const { movie: movieData, id, dinner } = movie;
    return this.http
      .delete<any>(`${this.API_URL}/${id}`, { body: { movie: movieData, dinner } })
      .pipe(switchMap(() => this.getDinnersAndMovies()));
  }

}
