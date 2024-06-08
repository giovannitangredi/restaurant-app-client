import { Routes } from '@angular/router';
import { RestaurantComponent } from "./components/restaurant/restaurant.component";
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Home Page'},
    {path: 'menu/:id', component: RestaurantComponent, title: ''}
];
