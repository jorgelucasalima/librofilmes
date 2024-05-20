import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieDetails } from './movie-details.interface';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent  implements OnInit {
  title = 'Detalhes do filme';

  movie$!: Observable<MovieDetails>;

  constructor(private route: ActivatedRoute, private tmdbService: TmdbService) {}

  ngOnInit(): void {
    this.movie$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id') || '';
        console.log(id)
        return this.tmdbService.getMovieDetails(Number(id));
      })
    );  

    //console.log(this.movie$);
  }

}
