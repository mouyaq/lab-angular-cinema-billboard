import { MovieItemComponent } from './components/movie/movie-item/movie-item.component';
import { HomeComponent } from './components/home/home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'movie/:id', component: MovieItemComponent }
]