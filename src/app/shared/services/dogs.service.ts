import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DogsService {

  constructor(
    private http: HttpClient
  ) { }

  getDogs() {
  	return this.http
  	  .get('https://dog.ceo/api/breeds/list/all')
  	  .toPromise();
  }
}
