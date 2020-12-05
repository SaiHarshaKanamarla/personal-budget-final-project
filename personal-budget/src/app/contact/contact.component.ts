import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'pb-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  getValues(val){
    console.log(val);
  }

  feedBackProcess(data){
    console.log(data);
    const url = "http://localhost:3000/feedback";
    this.http.post(url,{
      username : data.username,
      description: data.description,
      email : data.email
    }).toPromise().then((data:any)=>{
        console.log(data);
    })
  }
}
