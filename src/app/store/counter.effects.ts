/*
  @ngrx/effects
  Effects are an RxJS powered side effect model for Store. Effects use streams to provide new sources of actions to reduce state based on external interactions such as network requests, web socket messages and time-based events.
*/

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrement, increment, init, set } from "./counter.actions";
import { exhaustMap, of, switchMap, tap, withLatestFrom } from "rxjs";
import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectCount } from "./counter.selector";

@Injectable()
export class CounterEffects {
  private actions$ = inject(Actions);
  private store$ = inject(Store);

  loadCounter = createEffect(() => this.actions$.pipe(
    ofType(init),
    exhaustMap(() => {
      const counterFromLocalStorage = localStorage.getItem('counter');
      if(counterFromLocalStorage) {
        return  of(set({ value: +counterFromLocalStorage }))
      }
      return of(set({ value: 0 }));
    })
  ));

  saveCount = createEffect(() => this.actions$.pipe(
      ofType(increment, decrement),
      withLatestFrom(this.store$.select(selectCount)),
      tap(([action, counter]) => {
        console.log(action);
        localStorage.setItem('counter', counter.toString());
      })
      // Almacena el valor en que se esta incrementando el contador mas no el valor del contador en si
      // tap((action) => {
      //   console.log(action);
      //   localStorage.setItem('counter', action.value.toString());
      // })
    ), 
    { dispatch: false }
  );

}