import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class Storage {

  constructor(public http: Http) {
  }
  // Load all github users

  get(searchParam: string): Observable<User[]> {

  }
}
