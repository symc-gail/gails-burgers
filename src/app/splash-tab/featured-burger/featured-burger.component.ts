import { Component, Input, OnInit } from '@angular/core';
import { Burger } from 'src/app/_interfaces/burger';
import { BurgerService } from 'src/app/_services/burger.service';

@Component({
  selector: 'app-featured-burger',
  templateUrl: './featured-burger.component.html',
  styleUrls: ['./featured-burger.component.scss']
})
export class FeaturedBurgerComponent implements OnInit {
  burger!: Burger;

  constructor(private burgerService: BurgerService) { }

  ngOnInit(): void {
    this.burgerService.getFeaturedBurger().subscribe((burger) => {
      this.burger = burger;
    })
  }

  goToOrdersTab() {
    // TODO navigate to the orders tab
  }

}
