import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js'
import * as D3 from 'd3';
import { DataService } from '../data.service';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  
  public dataSource = {
    datasets: [{
        data: [],
        backgroundColor : [
            '#ffcd56',
            '#ff6384',
            '#40E82F',
            '#6E453C',
            '#23rvfs',
            '#6324EA',
            '#A9256B',
            '#0BF0E8',
            '#F0FF00'
        ]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        
    ]
};


  constructor(private http: HttpClient,public _dataService: DataService) { }

  ngOnInit(): void {
  // Making the subscribe call only when the datasource coming from the dataservice is empty.
    if (this._dataService.dataSource.length > 0){
      for (let i = 0; i < this._dataService.dataSource.length; i++) {
        this.dataSource.datasets[0].data[i] = this._dataService.dataSource[i].budget;
        this.dataSource.labels[i] = this._dataService.dataSource[i].title;
        this.createChart();
      }
    } else {
    this._dataService.getData().subscribe((data: any) => {     
      for (let i = 0; i < data.length; i++) {
        this.dataSource.datasets[0].data[i] = data[i].budget;
        this.dataSource.labels[i] = data[i].title;
        this.createChart();
      }
    });
  }
  }

  createChart(){
    var ctx : any = document.getElementById("myChart")
    var myPieChart = new Chart(ctx,{
        type: 'pie',
        data : this.dataSource
    })
}
  

}
