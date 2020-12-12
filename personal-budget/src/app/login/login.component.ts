import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';
import {GlobalConstants} from '../app.global';
@Component({
  selector: 'pb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userData = [];
  username:string
  password:string

  constructor(private router: Router,public _dataService: DataService,private toastr: ToastrService) {
      // this._dataService.getUserData()
      // .subscribe((res:any)=>{
      //   res.forEach(element => {
      //     this.userData.push(element);
      //   });
      // });
      // console.log(this.userData);
      
   }

  ngOnInit(): void {
  }

  getValues(val){
    console.log(val);
  }

  signuppage(){
    this.router.navigate(['/signup']);
  }

  loginSuccessful(){
    this.toastr.success('Logged In','Success');
  }

  loginFailure(){
    this.toastr.error('Invalid Credentials. Please enter valid credentials','Failure');
  }

  homepage(){
    for(let i=0;i<this.userData.length;i++){
      if(this.username == this.userData[i].username && this.password == this.userData[i].password){
        console.log("User exists so you can login");
        this.loginSuccessful();
        GlobalConstants.loggedStatus = true;
        console.log(GlobalConstants.loggedStatus);
        this.router.navigateByUrl('/MenuComponent', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/homepage']);
        });
       // this.router.navigate(['/homepage']);        
        return;
      }
    }    
    console.log("User validation failed");
    this.loginFailure();
  }

}
