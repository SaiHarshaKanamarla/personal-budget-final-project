import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Id3data } from './d3data'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http: HttpClient) { }

  //private _url = "assets/d3data.json"
  private _url = "http://localhost:3000/data";

  getData() : Observable<Id3data[]>{  
    return this.http.get<Id3data[]>(this._url)      
  }

}
