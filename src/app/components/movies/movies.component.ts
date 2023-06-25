import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() moviesList?: any[];

  randomMovie?: any;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.dataService.getDinnersAndMovies().subscribe(
      (response) => {
        this.moviesList = response.filter((item) => item.movie.title);
      },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );
  }

  getRandomMovie() {
    const randomIndex = Math.floor(Math.random() * this.moviesList!.length);
    this.randomMovie = this.moviesList![randomIndex];
  }

  deleteMovie(movie: any) {
    this.dataService.delete(movie).subscribe(
      () => {
        this.fetchMovies();
      },
      (error) => {
        // Handle error here
        console.error('Error deleting movie:', error);
      }
    );
  }
}
