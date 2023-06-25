import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MovieComponent {
  movies: any[] = [];
  randomMovie?: any;
  newMovie: any = {};

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getDinnersAndMovies().subscribe(
      (response) => {
        this.movies = response.filter((item) => Object.keys(item.movie).length !== 0);
        console.log(this.movies)
      },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );
  }

  getRandomMovie() {
    const randomIndex = Math.floor(Math.random() * this.movies.length);
    this.randomMovie = this.movies[randomIndex];
  }

  addMovie() {
    this.dataService.addMovie(this.newMovie).subscribe(
      (response) => {
        console.log('Movie added successfully:', response);
      },
      (error) => {
        console.error('Error adding movie:', error);
      }
    );
  }

}
