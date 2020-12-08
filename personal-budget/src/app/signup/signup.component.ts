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

  username:string;
  password:string;
  email:string

  public duplicate = false;
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

  createSuccessfull(){
    this.toastr.success('User creation successful. Login with these credentials','Success');
  }

  duplicateCheck(){
    let record = {};
    record['username'] = this.username;
    record['password'] = this.password;    
    record['email'] = this.email;

    this._dataService.getUserData()
    .subscribe((res:any)=>{
      console.log(res);
      res.forEach(element => {
        console.log(element)
        if(element.username == this.username){
          console.log("Duplicate exists");
          this.duplicate = true;          
        }
      });
    })

    this.registrationProcess();
  }

  registrationProcess(){
    //this.duplicateCheck();
    let record = {};
    record['username'] = this.username;
    record['password'] = this.password;    
    record['email'] = this.email;

    if(this.duplicate){
      console.log("Valid user");
      this._dataService.addNewUser(record).then(res =>{
          this.username = "";
          this.password = "";
          this.email = "";
          this.createSuccessfull();
          this.router.navigate(['/login']);
      })
    }else{
          console.log("Duplicate hit");
          this.duplicateUserName();
          this.duplicate = false;
          this.username = "";
          this.password = "";
          this.email = "";
  }        
  }

}
