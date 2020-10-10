import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, takeUntil } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  DataObservable: Observable<any>;
  
  constructor(private http: HttpClient) { }
  
  // An if-else statment where we are populating an Observable and checking it before out API call. 
  // If it's empty only then call to API is made.
  // If not then data is read from the Observable.
  // tslint:disable-next-line: typedef
  getData(): Observable<any> {
    if (this.DataObservable) {
      return this.DataObservable;
    } else {
      this.DataObservable = this.http.get('http://localhost:3000/budget').pipe(shareReplay());
      return this.DataObservable;
    }
  }
  }
