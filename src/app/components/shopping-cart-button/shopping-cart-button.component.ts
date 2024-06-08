import { Component, inject , OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { CartItem, ShoppingCartService } from '../../services/shopping-cart.service';
import { ShoppingCartPopupComponent } from '../shopping-cart-popup/shopping-cart-popup.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-cart-button',
  standalone: true,
  imports: [ShoppingCartPopupComponent, CommonModule],
  templateUrl: './shopping-cart-button.component.html',
  styleUrl: './shopping-cart-button.component.css'
})
export class ShoppingCartButtonComponent implements OnInit {

  isCartPopupVisible= false;
  cartService: ShoppingCartService = inject(ShoppingCartService);

  cartItems : CartItem[] = [];

  ngOnInit() : void {
    this.cartService.getItemsAsObservable().subscribe(items => {
      this.cartItems = items;
    });
  }

  toggleShoppingCartpopup() {
    this.isCartPopupVisible = !this.isCartPopupVisible;
  }
}
