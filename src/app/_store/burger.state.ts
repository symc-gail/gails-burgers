import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Burger } from '../_interfaces/burger';
import { BurgerService } from '../_services/burger.service';
import { BurgerActions } from './burger.actions';
import { tap } from 'rxjs/operators';

export interface BurgerStateModel {
  burgers: Burger[],
  numberOrdered: number,
  featuredId: string | undefined,
}

@State<BurgerStateModel>({
  name: 'burger',
  defaults: {
    burgers: [],
    numberOrdered: 0,
    featuredId: undefined
  }
})
@Injectable()
export class BurgerState {
  constructor(private burgerService: BurgerService) {}

  @Selector()
  static burgers(state: BurgerStateModel) {
    return state.burgers;
  }

  @Selector()
  static burgerCount(state: BurgerStateModel) {
    return state.burgers.length;
  }

  @Action(BurgerActions.GetAll)
  getAllBurgers({ patchState }: StateContext<BurgerStateModel>) {
    return this.burgerService.getBurgers().pipe(
      tap((burgers) => patchState({burgers}))
    );
  }

  /* @Action(FeedAnimals)
  feedAnimals(ctx: StateContext<ZooStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      feed: !state.feed
    });
  }*/
}

