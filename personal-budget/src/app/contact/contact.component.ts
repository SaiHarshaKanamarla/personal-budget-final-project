import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pb-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getValues(val){
    console.log(val);
  }

  feedBackProcess(data){
    console.log(data);
  }
}
