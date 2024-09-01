import { Component, output } from '@angular/core';

// Ngrx
import { Store } from '@ngrx/store';
import {
  decrement,
  increment /* IncrementAction*/,
} from '../store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  standalone: true,
  imports: [],
  templateUrl: './counter-controls.component.html',
  styleUrl: './counter-controls.component.css',
})
export class CounterControlsComponent {
  constructor(private store: Store) {}

  increment() {
    // this.store.dispatch(new IncrementAction(2));
    this.store.dispatch(increment({ value: 2 }));
  }

  decrement() {
    this.store.dispatch(decrement({ value: 2 }));
  }
}
