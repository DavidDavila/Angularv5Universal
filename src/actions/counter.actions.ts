import { Injectable } from '@angular/core';
import { AnyAction } from 'redux';

@Injectable()
export class CounterActions {
  static INCREMENT = 'INCREMENT';
  static DECREMENT = 'DECREMENT';

  increment(): AnyAction {
    return { type: CounterActions.INCREMENT };
  }

  decrement(): AnyAction {
    return { type: CounterActions.DECREMENT };
  }
}