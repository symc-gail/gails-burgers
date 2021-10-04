import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import BurgerFactory from '../_factories/burger.factory';
import { Burger } from '../_interfaces/burger';

@Injectable({
  providedIn: 'root'
})
export class BurgerService {
  burgers: Burger[];

  constructor() {
    this.burgers = BurgerFactory.buildList(5);
   }

  getBurgers(): Observable<Burger[]> {
    return of(this.burgers);
  }
}
