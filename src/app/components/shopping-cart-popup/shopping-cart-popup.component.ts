import { Component, Output, inject, OnInit, EventEmitter } from '@angular/core';
import { CartItem, ShoppingCartService } from '../../services/shopping-cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-cart-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-cart-popup.component.html',
  styleUrl: './shopping-cart-popup.component.css'
})
export class ShoppingCartPopupComponent implements OnInit{
  cartService = inject(ShoppingCartService);
  items: CartItem[] = [];
  @Output() close = new EventEmitter<void>();
  
  ngOnInit() : void {
    this.cartService.getItemsAsObservable().subscribe(items => {
      this.items = items;
    })
  }

  closePopup() {
    this.close.emit();
  }
}
