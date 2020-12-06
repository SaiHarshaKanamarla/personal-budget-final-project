import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'pb-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router,public _dataService: DataService) { }

  ngOnInit(): void {
  }

  getValues(val){
    console.log(val);
  }

  registrationProcess(data){
    console.log(data);
    const url = "http://localhost:3000/users";
    if(!data.username || !data.password || !data.email){
      alert("Invalid details");
      return;
    }
    else{
      this._dataService.getData()
      .subscribe((res:any)=>{
        res.forEach(element => {
          if(element.username == data.username){
            alert("Username already exists. Please proceed to login page");
            return;
          }
        });
      })
    }
    this.http.post(url,{
      username : data.username,
      password: data.password,
      email : data.email
    }).toPromise().then((data:any)=>{
        console.log(data);
        console.log("Registration Successful");
        this.router.navigate(['/login'])

    })
  }

}
