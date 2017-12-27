import {  INITIAL_STATE } from "../store/store";
import { NameActions } from '../actions/name.actions';
import { Reducer, AnyAction } from 'redux';

export const NameReducer: Reducer<string> = (lastState: string = '', action: AnyAction): string => {
  switch(action.type) {
    case NameActions.SET_NAME:
    	return action.payload;
    case NameActions.DELETE_NAME:
    	return  '';
  }
  return lastState;
}