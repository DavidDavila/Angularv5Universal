import { INITIAL_STATE } from "../store/store";
import { CounterActions } from '../actions/';
import { Reducer, AnyAction } from 'redux';

export const CounterReducer: Reducer<number> = (lastState: number = 0, action: AnyAction): number  => {
  switch(action.type) {
    case CounterActions.INCREMENT: 
    	return  lastState + 1
    case CounterActions.DECREMENT: 
    	return lastState - 1;
  }
  return lastState;
}