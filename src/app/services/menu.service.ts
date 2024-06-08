import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  baseUrl = 'http://localhost:3000/menu';
  urlRestaurant = 'http://localhost:3000/restaurant'

  constructor() { }
  
  async getAllMenus() : Promise<Menu[]> {
    const data = await fetch(this.baseUrl);
    return await data.json() ?? [];
  }
  async getMenuById(restaurantId : string) : Promise<Menu> {
    const data = await fetch(this.baseUrl+`/${restaurantId}`);
    return await data.json() ?? {};
  }

  async getAllRestaurantMenus(restaurantId : string) :  Promise<Menu[]> {
    const data = await fetch(this.baseUrl+`/all/${restaurantId}`);
    const restaurantData= await fetch(this.urlRestaurant+`/${restaurantId}`);
    const menu =  await data.json() ?? {}
    if(Object.keys(menu).length == 0)
      return menu;
    menu.restaurant == await restaurantData ?? {};
    return menu;
  }
}
