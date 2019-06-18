import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, forkJoin, BehaviorSubject, of } from 'rxjs';

import {environment} from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getDatos(): Observable<any[]> {
		return this.http.get<any[]>(environment.url+ 'getdatos')
	}
}
