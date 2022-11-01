import { Component, OnInit } from '@angular/core';
import {SeriesService} from "./series.service";
import {Serie} from "./serie";

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private seriesService: SeriesService) { }
  series: Array<Serie> = [];

  getSeries(){
    this.seriesService.getSeries().subscribe(series => {
      this.series = series;
    });
  }


  average: number = 0;
  sum: number = 0;
  calAverage(): number{
    this.seriesService.getSeries().subscribe(series => {
      this.series = series;
      let answer = 0;
      for (let i = 0; i < this.series.length; i++) {
        this.sum += this.series[i].seasons;
      }
      answer = this.average = this.sum / this.series.length;
    });
    return this.average = this.sum / this.series.length || 0;
  }




  ngOnInit(): void {
    this.getSeries();
    this.calAverage();


  }

}
