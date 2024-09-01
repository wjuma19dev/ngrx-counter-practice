import { Action, createReducer, on } from '@ngrx/store';
import {
	// CounterActions,
	// INCREMENT,
	increment,
	// IncrementAction,
} from './counter.actions';

const initialState = 0;

export const counterReducer = createReducer(
	initialState,
	on(increment, (state, action) => state + action.value),
);

// Action alternative
// export function counterReducer(
// 	state = initialState,
// 	action: CounterActions | Action,
// ) {
// 	if (action.type === INCREMENT) {
// 		return state + (action as IncrementAction).value;
// 	}
// 	return state;
// }
