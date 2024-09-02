import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { Store } from '@ngrx/store';
import { init } from './store/counter.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterOutputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  title = 'count';
  store$ = inject(Store);

  constructor() {
    this.store$.dispatch(init());
  }

}
