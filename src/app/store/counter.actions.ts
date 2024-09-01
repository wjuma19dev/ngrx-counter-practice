import { createAction, props } from '@ngrx/store';

export const increment = createAction(
	'[Counter] Increment',
	props<{ value: number }>(),
);

// Alternative to createAction
// export const INCREMENT = '[Counter] Increment';

// export class IncrementAction {
// 	readonly type = INCREMENT;
// 	constructor(public value: number) {}
// }

// export type CounterActions = IncrementAction;
