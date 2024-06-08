import { Component, inject } from '@angular/core';
import { Restaurant } from "../../interfaces/restaurant";
import { RestaurantService } from "../../services/restaurant.service";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.css'
})
export class RestaurantListComponent {

  protected restaurantList : Restaurant[] = [];
  protected restaurantService : RestaurantService = inject(RestaurantService);
  constructor(private router: Router) {
    this.restaurantService.getAllRestaurant().then((res) => this.restaurantList = res);
  }

  clickOnRestaurantCard(restaurant: string) {
    this.router.navigate(['/menu/'+restaurant])
  }

}
