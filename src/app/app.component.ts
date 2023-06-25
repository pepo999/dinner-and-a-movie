import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  opened: boolean = false;

  movies: any[] = [];

  value?: string;

  movieTitle?: string;

  dinnerTitle?: string;

  ingredients?: string;

  newElement: object = {
    movie: {
      title: this.movieTitle,
      watched: false,
    },
    dinner: {
      title: this.dinnerTitle,
      ingredients: this.ingredients,
    },
  };

  constructor(private dataServ: DataService) {
    this.value = 'one';

    this.dataServ.getDinnersAndMovies().subscribe(
      (movies) => {
        this.movies = movies;
      },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );
  }

  openDialog() {
    this.opened = true;
  }

  add() {
    this.newElement = {
      movie: {
        title: this.movieTitle,
        watched: false,
      },
      dinner: {
        title: this.dinnerTitle,
        ingredients: this.ingredients,
      },
    };

    this.dataServ.addMovie(this.newElement).subscribe(
      (response: any) => {
        this.movies.push(response);
        this.fetchMovies();
      },
      (error: any) => {
        console.error('Error adding movie:', error);
      }
    );

    this.opened = false;
    this.movieTitle = '';
    this.dinnerTitle = '';
    this.ingredients = '';
  }

  cancel() {
    this.opened = false;
  }

  private fetchMovies() {
    this.dataServ.getDinnersAndMovies().subscribe(
      (response) => {
        this.movies = response.filter((item) => item.movie.title);
      },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );
  }
}
