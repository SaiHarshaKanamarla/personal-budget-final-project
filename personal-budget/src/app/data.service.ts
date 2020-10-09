import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http: HttpClient) { }

  dataSource =  []; // This is populated when empty by making a get call as

  private _url = "http://localhost:3000/budget";

  getData(){
    return this.http.get(this._url);
  }

}
