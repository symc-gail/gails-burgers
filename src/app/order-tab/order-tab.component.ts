import { Component, OnInit } from '@angular/core';
import { Burger } from '../_interfaces/burger';
import { BurgerService } from '../_services/burger.service';

@Component({
  selector: 'app-order-tab',
  templateUrl: './order-tab.component.html',
  styleUrls: ['./order-tab.component.scss']
})
export class OrderTabComponent implements OnInit {
  burgerList: Burger[] = [];

  constructor(private burgerService: BurgerService) { }

  ngOnInit(): void {
    this.burgerService.getBurgers().subscribe((burgers) => {
      this.burgerList = burgers;
    })
  }

}
