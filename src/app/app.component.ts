import { Component, OnInit } from '@angular/core';
import { TmdbService } from './tmdb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'librofilmes';

  movies: any[] = [];

  constructor(private tmdbService: TmdbService) {}

  ngOnInit() {
    this.tmdbService.getTrendingMovies().subscribe((data: any) => {
      this.movies = data.results;
    });
  }
}
