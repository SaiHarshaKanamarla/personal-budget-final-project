import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'pb-hometable',
  templateUrl: './hometable.component.html',
  styleUrls: ['./hometable.component.scss']
})
export class HometableComponent implements OnInit {

  data = []

  constructor(public _dataService : DataService, private http: HttpClient) { }

  ngOnInit(): void {
    this._dataService.getData()
    .subscribe((res:any)=>{
      this.data = res
      console.log(this.data);
    })
  }

}
