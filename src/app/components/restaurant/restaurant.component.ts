import { Component, Input, inject } from '@angular/core';
import { Restaurant } from '../../interfaces/restaurant';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { Menu } from '../../interfaces/menu';
import { MenuService } from '../../services/menu.service';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MenuModalComponent } from '../menu-modal/menu-modal.component';


@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {
  
  restaurant : Restaurant = {} as Restaurant;
  route: ActivatedRoute = inject(ActivatedRoute);
  restaurantService = inject(RestaurantService)
  menus : Menu[] = [];
  menuService = inject(MenuService)
  private modalService = inject(NgbModal);

  constructor() {
    const restaurant_id = this.route.snapshot.params['id'];
    this.restaurantService.getRestaurant(restaurant_id).then((res : Restaurant) =>{
      this.restaurant = res;
      this.menuService.getAllRestaurantMenus(restaurant_id).then((res : Menu[]) => {
        this.menus= res;
      });
    });
  }

  openModal(menu: Menu) {
		const modalRef = this.modalService.open(MenuModalComponent);
    
		modalRef.componentInstance.menu = menu;
    modalRef.componentInstance.submitText = "Add To Cart";
	}
}
