import { Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Selector, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { Burger } from '../_interfaces/burger';
import { BurgerService } from '../_services/burger.service';
import { BurgerActions } from '../_store/burger.actions';
import { BurgerState } from '../_store/burger.state';

@Component({
  selector: 'app-order-tab',
  templateUrl: './order-tab.component.html',
  styleUrls: ['./order-tab.component.scss']
})
export class OrderTabComponent implements OnInit, OnDestroy {
  @Select(BurgerState.burgers) burgerList$?: Observable<Burger[]>;
  burgerCount?: number;
  subscriptions = new Subscription();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new BurgerActions.GetAll())
    this.subscriptions.add(this.store.select(BurgerState.burgerCount).subscribe((count) => {
      this.burgerCount = count;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
