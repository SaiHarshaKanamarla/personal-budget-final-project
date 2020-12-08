import { Component, OnInit } from '@angular/core';
import {GlobalConstants} from '../app.global';

@Component({
  selector: 'pb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public loggedin;

  constructor() {    
   }

  ngOnInit(): void {
    this.loggedin = GlobalConstants.loggedStatus; 
    console.log(this.loggedin);
  }

}
