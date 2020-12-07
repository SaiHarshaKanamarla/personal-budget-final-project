import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'pb-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  username:string;
  email:string;
  description:string


  constructor(public _dataService: DataService) { }

  ngOnInit(): void {
  }

  getValues(val){
    console.log(val);
  }

  sendFeedback(){
    let record = {};

    record['username'] = this.username;
    record['email'] = this.email;
    record['description'] = this.description;

    this._dataService.createNewFeedBack(record).then(res => {
      this.username = "";
      this.email = "";
      this.description = "";
      console.log(res);
    }).catch(error => {
      console.log(error);
    });
  }
}
