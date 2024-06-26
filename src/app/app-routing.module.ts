import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';


const routes: Routes = [

  { path: '', component: MoviesComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
