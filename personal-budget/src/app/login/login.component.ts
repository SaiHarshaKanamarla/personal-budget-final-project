import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'pb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,public _dataService: DataService) { }

  ngOnInit(): void {
  }

  getValues(val){
    console.log(val)
  }

  signuppage(){
    this.router.navigate(['/signup'])
  }

  homepage(){
    this._dataService.getUsers()
    .subscribe((res:any)=>{
      console.log(res);
      
    })
    //this.router.navigate(['/homepage'])        
  }

}
