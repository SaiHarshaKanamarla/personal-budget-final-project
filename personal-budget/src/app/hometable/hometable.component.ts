import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AngularFirestore, AngularFirestoreDocument,AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface BudgetSchema{
  id: string;
  budget: number;
  maxbudget: number;
  color: string;
}



@Component({
  selector: 'pb-hometable',
  templateUrl: './hometable.component.html',
  styleUrls: ['./hometable.component.scss']
})
export class HometableComponent implements OnInit {

  budgetCollection : AngularFirestoreCollection<BudgetSchema>;
  budgetData: Observable<BudgetSchema[]>;

  data = []

  // constructor(private afs: AngularFirestore) { }
  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this._dataService.getBudgetData()
    .subscribe((res:any)=>{
      this.data = res
      console.log(this.data);
    })
  //   this.budgetCollection = this.afs.collection('budget');
  //   this.budgetData = this.budgetCollection.valueChanges();
  //   console.log(this.budgetData);
  // }

}

}