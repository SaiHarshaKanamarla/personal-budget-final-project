import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js'
import * as D3 from 'd3';
import { DataService } from '../data.service';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit {
  
  public dataSource = {
    datasets: [{
        data: [],
        backgroundColor : [           
        ]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        
    ]
};


  constructor(private http: HttpClient,public _dataService: DataService) { }

  ngAfterViewInit(): void {
  // Making the subscribe call for the first pie chart. Here the value is fetched from data source. 
  //The data.service file has the handling for the API call.
  this._dataService.getData()
  .subscribe((res: any) => {
    console.log(res);
    for (let i = 0; i < res.length; i++) {
     this.dataSource.datasets[0].data[i] = res[i].budget;
     this.dataSource.labels[i] = res[i].title;
     this.dataSource.datasets[0].backgroundColor[i] = res[i].color;
     this.createChart();
    }
  });
  }

  createChart(){
    var ctx : any = document.getElementById("myChart")
    var myPieChart = new Chart(ctx,{
        type: 'pie',
        data : this.dataSource
    })
}
  

}
