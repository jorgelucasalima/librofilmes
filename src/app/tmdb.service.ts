import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieDetails } from './movie-details/movie-details.interface';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private apiKey = '83051c49c8ea090d2c183c02a3905736'; 
  private language = 'pt-BR';
  private token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzA1MWM0OWM4ZWEwOTBkMmMxODNjMDJhMzkwNTczNiIsInN1YiI6IjY2NDdiYTk2NTUzNmExYTJmZmE1ZGJkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vbze__B0WHHHD0oXIK9-Q_tLhm35QYq8rT3ADRkqs0c'
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getTrendingMovies(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/trending/movie/week?api_key=${this.apiKey}&language=pt-BR`);
  }

  getMovieDetails(id: number): Observable<MovieDetails> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<any>(`${this.apiUrl}/movie/${id}?api_key=${this.apiKey}&language=${this.language}`, { headers });
  }
}