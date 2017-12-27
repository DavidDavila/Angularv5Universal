import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http';
import { TransferState, makeStateKey, Meta, Title } from '@angular/platform-browser';

import { NgRedux, select } from '@angular-redux/store';
import { CounterActions, NameActions, DogsActions } from './../actions/'; 
import {IAppState} from "../store/store"; 

import { DogsService } from './shared/services/dogs.service';

const DOGS_KEY = makeStateKey('dogs');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  dogs: any;

  @select() readonly count$: Observable<number>;
  @select() readonly name$: Observable<string>;
  @select() readonly dogs$: Observable<any>;

  constructor(
    private state: TransferState,
    public meta: Meta, 
    title: Title,
    private ngRedux: NgRedux<IAppState>,
    private counterActions: CounterActions,
    private nameActions: NameActions,
    private dogsActions: DogsActions,
    private dogsService: DogsService
  ) { 
  	title.setTitle('Blogist');

      // Sets the <meta> tag for the page
	  meta.addTags([
	    { name: 'author', content: 'Blogist' },
	    { name: 'description', content: 'This is a description.' },
	  ]);
  }

  ngOnInit() {
    this.dogs = this.state.get(DOGS_KEY, null as any);
    if (!this.dogs) {
      this.dogsService.getDogs().then(data => {
        this.dogs = data;
        this.state.set(DOGS_KEY, data as any);
        this.ngRedux.dispatch(this.dogsActions.setDogs(data['message']));
      });
    } else {
        this.ngRedux.dispatch(this.dogsActions.setDogs(this.dogs['message']));
    }
  }
  increment() {
    this.ngRedux.dispatch(this.counterActions.increment());
  }

  decrement() {
    this.ngRedux.dispatch(this.counterActions.decrement());
  }
  changeName(name: string) {
    this.ngRedux.dispatch(this.nameActions.setName(name))
  }
   deleteName() {
    this.ngRedux.dispatch(this.nameActions.deleteName())
  }
}