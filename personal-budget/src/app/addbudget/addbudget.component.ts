import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'pb-addbudget',
  templateUrl: './addbudget.component.html',
  styleUrls: ['./addbudget.component.scss']
})
export class AddbudgetComponent implements OnInit {

  budget:number;
  maxbudget:number;
  title:string

  constructor(private _dataService:DataService) { }

  ngOnInit(): void {
  }

  randomColorGen(){
    let randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    console.log(randomColor)
    return randomColor;    
  }

  sendExpense(){
    let record = {};

    record['budget'] = this.budget;
    record['maxbudget'] = this.maxbudget;
    record['title'] = this.title.charAt(0).toUpperCase()+this.title.slice(1);
    record['color'] = this.randomColorGen();

    this._dataService.addBudgetdata(record)
      .subscribe(data =>{
        console.log(data);
        this.budget = null;
        this.maxbudget = null;
        this.title = "";   
        this.locationreload();  
      })             
  }

  
  locationreload() {          
      location.reload();    
    }

}
