import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, takeUntil } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument,AngularFirestoreCollection } from '@angular/fire/firestore';
import { getLocaleDateFormat } from '@angular/common';
//import { Data } from '@angular/router';
import { BudgetSchema } from '../app/models/budget';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  // DataObservable: Observable<any>;
  // UserObservable : Observable<any>;
  
  budgetCollection : AngularFirestoreCollection<BudgetSchema>;
  budgetData: Observable<BudgetSchema[]>;

  
  constructor(public afs: AngularFirestore) {
    // this.budgetCollection = afs.collection<BudgetSchema>('budgetData');
    // this.budgetData = this.budgetCollection.valueChanges();
    //this.budgetData = this.afs.collection('budgetData').valueChanges();
    this.budgetCollection = this.afs.collection('budget');
    this.budgetData = this.budgetCollection.valueChanges();
  }
    
  getData(){
    return this.budgetData;
  }
  
  }

  


 

  

  //constructor(private http: HttpClient) { }
  // // An if-else statment where we are populating an Observable and checking it before out API call. 
  // // If it's empty only then call to API is made.
  // // If not then data is read from the Observable.
  // // tslint:disable-next-line: typedef
  // getData(): Observable<any> {
  //   // if (this.DataObservable) {
  //   //   return this.DataObservable;
  //   // } else {
  //   //   this.DataObservable = this.http.get('http://localhost:3000/budget').pipe(shareReplay());
  //   //   return this.DataObservable;
  //   // }
  // }

  // getUsers() : Observable<any>{
  //   // if(this.UserObservable){
  //   //   return this.UserObservable;
  //   // }else{
  //   //   this.UserObservable = this.http.get('http://localhost:3000/users').pipe(shareReplay());
  //   //   return this.UserObservable;
  //   // }
  // }

