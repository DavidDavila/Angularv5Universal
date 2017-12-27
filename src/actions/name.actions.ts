import { Injectable } from '@angular/core';
import { AnyAction } from 'redux';

@Injectable()
export class NameActions {
  static SET_NAME = 'SET_NAME';
  static DELETE_NAME = 'DELETE_NAME';

  setName(name: string): AnyAction {
    return { type: NameActions.SET_NAME, payload : name};
  }

  deleteName(): AnyAction {
    return { type: NameActions.DELETE_NAME };
  }
}