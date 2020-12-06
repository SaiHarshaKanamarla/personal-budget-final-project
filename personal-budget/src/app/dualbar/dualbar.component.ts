import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Chart } from 'chart.js'

@Component({
  selector: 'pb-dualbar',
  templateUrl: './dualbar.component.html',
  styleUrls: ['./dualbar.component.scss']
})
export class DualbarComponent implements OnInit {

  
  title = 'Bar Chart Example in Angular 4';

  chartOptions = {
    responsive: true    
  }

  labels = [];

  chartData = [
    {
      label: 'Current Budget',
      data: []  // load budget values
    },
    { 
      label: 'Maximum Budget',
      data: [] // load maximum budget values
    }
  ];

  colors = [
    { 
      backgroundColor: 'rgba(77,83,96,0.2)'
    },
    { 
      backgroundColor: 'rgba(30, 169, 224, 0.8)'
    }
  ]

  onChartClick(event) {
    console.log(event);
  }


  constructor(private http: HttpClient,public _dataService: DataService) { }

  ngOnInit(): void {
    // Making the subscribe call for the first pie chart. Here the value is fetched from data source. 
    //The data.service file has the handling for the API call.
    this._dataService.getData()
    .subscribe((res: any) => {
      console.log(res[0]);
      for (let i = 0; i < res.length; i++) {

        this.chartData[0].data[i] = res[i].budget;
        this.chartData[1].data[i] = res[i].maxbudget;
        this.labels[i] = res[i].title;
       //this.dataSource.datasets[0].data_budget[i] = res[i].budget;
       //this.dataSource.datasets[0].data_maxbudget[i] = res[i].maxbudget;
      //  this.dataSource.datasets[0].chartData[0].data[i] = res[i].maxbudget;
      //  this.dataSource.datasets[0].chartData[1].data[i] = res[i].budget;
      //  this.dataSource.labels[i] = res[i].title;
      //  this.dataSource.datasets[0].backgroundColor[i] = res[i].color;
       //this.createChart();
      }
    });
    }
        
    

  //   createChart(){
  //     var ctx : any = document.getElementById("myBar")
  //     var myBarChart = new Chart(ctx,{
  //         type: 'bar',
  //         data : this.dataSource,
  //     })
  // }

}
