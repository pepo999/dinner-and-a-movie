import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  API_URL = "https://6436c5228205915d34fc6fd5.mockapi.io/movies-and-dinners"

  constructor(private http: HttpClient) { }

  getDinnersAndMovies() {
    return this.http.get<any[]>(`${this.API_URL}`);
  }

  addMovie(movie: any){
    return this.http.post<any>(`${this.API_URL}`, movie);
  }

}
