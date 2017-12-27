import { combineReducers } from 'redux';
import { routerReducer } from '@angular-redux/router';
import { CounterReducer, NameReducer, DogsReducer} from './../reducers/';

export interface IAppState {
  count: number;
  name: string;
  dogs: any;
}

export const INITIAL_STATE: IAppState = {
  count: 0,
  name: 'david',
  dogs: {}
};


export const rootReducer = combineReducers<IAppState>({
	count: CounterReducer,
	name: NameReducer,
	dogs: DogsReducer,
  router: routerReducer
});