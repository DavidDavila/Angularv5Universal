import { INITIAL_STATE } from "../store/store";
import { DogsActions } from '../actions/';
import { Reducer, AnyAction } from 'redux';

export const DogsReducer: Reducer<any> = (lastState: any = {}, action: AnyAction): any  => {
  switch(action.type) {
    case DogsActions.SET_DOGS: 
    	return  action.payload
    case DogsActions.DELETE_DOG:     	
    	return {};
  }
  return lastState;
}