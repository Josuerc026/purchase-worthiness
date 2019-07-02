import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  timeSpentCalculated: number = null;
  weeklyHours: number = null;
  constructor() { }

  ngOnInit() {
  }
  storeTimeSpent(time: number): void {
    this.timeSpentCalculated = time;
  }
  storeWeeklyHours(hours: number): void {
    console.log(hours);
    this.weeklyHours = hours;
  }
}
