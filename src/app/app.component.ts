import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http';
import { TransferState, makeStateKey, Meta, Title } from '@angular/platform-browser';

import { NgRedux, select } from '@angular-redux/store';
import { CounterActions } from './../actions/app.actions'; 
import {IAppState} from "../store/store"; 

const DOGS_KEY = makeStateKey('dogs');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';

  dogs: any;

  @select() readonly count$: Observable<number>;

  constructor(
    private http: HttpClient,
    private state: TransferState,
    public meta: Meta, 
    public title: Title,
    private ngRedux: NgRedux<IAppState>,
    private actions: CounterActions
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
      this.http
        .get('https://dog.ceo/api/breeds/list/all')
        .subscribe(data => {
          this.dogs = data;
          this.state.set(DOGS_KEY, data as any);
        });
    }
  }
  increment() {
    this.ngRedux.dispatch(this.actions.increment());
  }

  decrement() {
    this.ngRedux.dispatch(this.actions.decrement());
  }
}