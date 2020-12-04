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

  public dataSource = {
    datasets: [{        
        data:[],
        backgroundColor : [           
        ]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        
    ]
};

  constructor(private http: HttpClient,public _dataService: DataService) { }

  ngOnInit(): void {
    // Making the subscribe call for the first pie chart. Here the value is fetched from data source. 
    //The data.service file has the handling for the API call.
    this._dataService.getData()
    .subscribe((res: any) => {
      console.log(res);
      for (let i = 0; i < res.length; i++) {
       //this.dataSource.datasets[0].data_budget[i] = res[i].budget;
       //this.dataSource.datasets[0].data_maxbudget[i] = res[i].maxbudget;
       this.dataSource.datasets[0].data = res[i].budget,res[i].maxbudget;
       this.dataSource.labels[i] = res[i].title;
       this.dataSource.datasets[0].backgroundColor[i] = res[i].color;
       this.createChart();
      }
    });
    }
        
    public chartOptions = {
      scales: {
        xAxes: [{
          barPercentage: 1,
          categoryPercentage: 0.6
        }],
        yAxes: [{
          id: "y-axis-density"
        }, {
          id: "y-axis-gravity"
        }]
      }
    };

    createChart(){
      var ctx : any = document.getElementById("myBar")
      var myBarChart = new Chart(ctx,{
          type: 'bar',
          data : this.dataSource,
      })
  }

}
