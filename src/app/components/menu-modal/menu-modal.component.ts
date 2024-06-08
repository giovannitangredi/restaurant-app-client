import { Component, Inject, inject, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Menu } from '../../interfaces/menu';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CounterComponent } from "../counter/counter.component";

import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-menu-modal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, CounterComponent],
  templateUrl: './menu-modal.component.html',
  styleUrl: './menu-modal.component.css'
})
export class MenuModalComponent {
  activeModal = inject(NgbActiveModal);

	@Input() menu!: Menu;
  @Input() submitText! : string;
  userNote = new FormControl('');

  quantity: number = CounterComponent.STARTING_VALUE;


  cart : ShoppingCartService = inject(ShoppingCartService);

  submitModal() {
    this.activeModal.close('Submit click');
    
    this.cart.addToCart(this.menu, this.quantity);

    console.log(this.cart.items.values())
  }

  getCounterValue(quantity: number) {
    this.quantity = quantity;
  }
}
