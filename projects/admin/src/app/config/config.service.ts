import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpBackend } from '@angular/common/http'; //simulates the behavior of a REST-like backend.
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Resp } from '../resp';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get<Resp>("http://localhost:9100/product/category/list/tree");
  }
}
