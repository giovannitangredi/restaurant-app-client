import { Injectable } from '@angular/core';
import { Menu } from "../interfaces/menu";
import { Restaurant } from '../interfaces/restaurant';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  items : Map<string ,CartItem> = new Map<string ,CartItem>();

  restaurant: string = "";

  cartItemsSubject = new BehaviorSubject<any[]>(this.getAllItems());

  constructor() { 
    this.items = new Map<string ,CartItem>();
    this.restaurant = "";
  }

  addToCart(menu: Menu, n: number) {
    const id = menu.id;
    const item = new CartItem(menu, n);

    if(!this.isSameRestaurant(menu.restaurant)) {
      this.restaurant = menu.restaurant.id;
      this.clearCart();
    }
  
    if(this.items.has(id)) {
      const oldQuantity : number = this.items.get(id)!.getQuantity;
      item.setQuantity = n + oldQuantity;
    }
    this.items.set(id, item);

    this.cartItemsSubject.next(this.getAllItems());
  }

  getAllItems() : CartItem[] {
    return Array.from(this.items.values());
  }

  getItemsAsObservable() {
    return this.cartItemsSubject.asObservable();
  }

  getAllItemsIds() : string[] {
    return Array.from(this.items.keys());
  }

  clearCart() {
    this.items = new Map();
    this.cartItemsSubject.next(this.getAllItems());
  }

  removeFromCart(menu: Menu) {
    const id = menu.id;
    this.items.delete(id);
    this.cartItemsSubject.next(this.getAllItems());
  }

  isSameRestaurant(restaurant : Restaurant) {

    return this.restaurant === restaurant.id;

  }
}


export class CartItem {

  private menu : Menu;
  private quantity : number;
  constructor(menu :Menu, quantity: number) {
    
    this.menu = menu;
    this.quantity = quantity;
  }

  getId() {
    return this.menu.id;
  }
  public set setMenu(menu : Menu) {
    this.menu = menu;
  }
  
  public set setQuantity(quantity : number) {
    this.quantity = quantity;
  }
  
  
  public get getMenu() : Menu {
    return this.menu;
  }

  
  public get getQuantity() : number {
    return this.quantity;
  }
  
}
