import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js'
import * as d3 from "d3"

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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/budget')
    .subscribe((res: any)=>{
      console.log(res);
      for(var i=0;i<res.myBudget.length;i++){
        this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
        this.dataSource.labels[i] = res.myBudget[i].title;
        this.createChart();
    }
    })
  }

  createChart(){
    var ctx = document.getElementById("myChart");
    var myPieChart = new Chart(ctx,{
        type: 'pie',
        data : this.dataSource
    })
}




  


}