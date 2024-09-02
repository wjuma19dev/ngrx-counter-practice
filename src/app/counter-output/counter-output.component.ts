import { Component } from '@angular/core';
import { CounterControlsComponent } from '../counter-controls/counter-controls.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { selectCount, selectDoubleCount } from '../store/counter.selector';

@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [CounterControlsComponent, AsyncPipe],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css',
})
export class CounterOutputComponent {
  counter$!: Observable<number>;
  doubleCounter$!: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    this.counter$ = store.select(selectCount);
    this.doubleCounter$ = store.select(selectDoubleCount);
  }
}
