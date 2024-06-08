import { Injectable } from '@angular/core';
import { Restaurant } from "../interfaces/restaurant";
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  baseUrl = 'http://localhost:3000/restaurant';

  constructor() { }
  
  async getAllRestaurant() : Promise<Restaurant[]> {
    const data = await fetch(this.baseUrl);
    return await data.json() ?? [];
  }

  async getRestaurant(id : string) :  Promise<Restaurant> {
    const data = await fetch(this.baseUrl+`/${id}`);
    return await data.json() ?? {};
  }
}
