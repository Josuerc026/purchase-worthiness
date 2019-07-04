import { Component, OnInit, Input } from '@angular/core';
import userInfo from '../user-info';

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.scss']
})
export class VisualizerComponent implements OnInit {
  @Input() userInfo: userInfo = {
    monthly: null,
    expenses: null,
    hours: null,
    price: null,
    calcs: {
      timeSpent: null,
      percentageOfWeeklyTimeSpent: null,
      percentageOfMonthly: null,
      percentageOfExpenses: null,
      percentageOfSaved: null
    }
  }
  constructor() { }

  ngOnInit() {
    if(this.userInfo == null){
      this.userInfo = {
        monthly: null,
        expenses: null,
        hours: null,
        price: null,
        calcs: {
          timeSpent: null,
          percentageOfWeeklyTimeSpent: null,
          percentageOfMonthly: null,
          percentageOfExpenses: null,
          percentageOfSaved: null
        }
      }
    }
  }

}
