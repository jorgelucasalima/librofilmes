import { Component } from '@angular/core';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {

  title = 'librofilmes';

  movies: any[] = [];

  constructor(private tmdbService: TmdbService) {}

  ngOnInit() {
    this.tmdbService.getTrendingMovies().subscribe((data: any) => {
      this.movies = data.results;
    });
  }
}
