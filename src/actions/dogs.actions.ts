import { Injectable } from '@angular/core';
import { AnyAction } from 'redux';

@Injectable()
export class DogsActions {
  static SET_DOGS = 'SET_DOGS';
  static DELETE_DOG = 'DELETE_DOG';

  setDogs( dogs: any ): AnyAction {
    return { type: DogsActions.SET_DOGS, payload: dogs };
  }

  deleteDog(): AnyAction {
    return { type: DogsActions.DELETE_DOG };
  }
}