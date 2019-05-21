import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EChartOption } from 'echarts';
import { MovieService } from '../service/movie.service';
import * as echarts from 'echarts';

@Component({
  selector: 'app-trending-chart',
  templateUrl: './trending-chart.component.html',
  styleUrls: ['./trending-chart.component.scss']
})
export class TrendingChartComponent implements OnInit {
  routeName ='trendingchart';
  rating=[];
  movieTitles=[]; 
  error= 'Loading...';
  @ViewChild('main') main:ElementRef;
  
  constructor(private movieService:MovieService) { }
  ngOnInit() {
    if(this.rating.length == 0)
    this.movieService.getTrendingCharts().subscribe(data=>{
      data['results'].filter(data=>this.rating.push(data.vote_average));
      data['results'].filter(data=>this.movieTitles.push(data.title?data.title:data.name));
      this.error =  "";
      let echart = echarts.init(this.main.nativeElement);
      echart.setOption(this.chartOption);
    },err=>this.error =err)
  }


  chartOption:EChartOption = {
    color: ['#4fffc3'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            
            type : 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : this.movieTitles,
            axisTick: {
                alignWithLabel: true
            },
            axisLabel:{
              color:'white',
              fontSize:10,
              formatter: (function(value){
                return value.substr(0,4) +"...";
              })
            }
        }
    ],
    yAxis : [
        {
            name:"Rating",
            type : 'value',
            nameTextStyle:{
              color:'white',
              fontSize:18,
              verticalAlign:'top'
            },
            nameLocation:'middle',
            nameGap:40,
            axisLabel:{
              color:'white',
              fontSize:18
            }
        }
    ],
    series : [
        {
            name:'Rating',
            type:'bar',
            barWidth: '20%',
            data:this.rating
        }
    ]
  };
}
