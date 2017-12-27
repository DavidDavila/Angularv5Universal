import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { NgRedux, select } from '@angular-redux/store';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	@select() readonly count$: Observable<number>;
  constructor() { }

  ngOnInit() {
  }

}
