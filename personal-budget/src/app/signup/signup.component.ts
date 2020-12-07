import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'pb-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router,public _dataService: DataService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  getValues(val){
    console.log(val);
  }

  triggertoast(){
    this.toastr.error('some message');
  }

  duplicateUserName(){
    this.toastr.warning('User already exists. Please proceed to login','Existing User?');
  }

  registrationProcess(data){
    console.log(data);    
    if(!data.username || !data.password || !data.email){
      alert("Invalid details");
      return;
    }
    else{
      this._dataService.getData()
      .subscribe((res:any)=>{
        res.forEach(element => {
          if(element.username == data.username){
            //alert("Username already exists. Please proceed to login page");
            return;
          }
        });
      })
    }
    
  }

}
