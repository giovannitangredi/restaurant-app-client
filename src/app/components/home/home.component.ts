import { Component } from '@angular/core';
import { RestaurantListComponent } from '../restaurant-list/restaurant-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RestaurantListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
