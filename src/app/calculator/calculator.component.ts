import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  monthly: number = null;
  expenses: number = null;
  hours: number = null;
  price: number = null;
  output: string = null;

  @Output() timeSpent: EventEmitter<any> = new EventEmitter<any>();
  @Output() weeklyHours: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  calculate() {
    const timeSpent = (this.price / (((this.monthly * 12) - this.expenses) / (this.hours * 52)));
    this.output = Math.round(timeSpent) + '';
    this.timeSpent.emit(timeSpent);
    this.weeklyHours.emit(parseInt(this.hours));
  }

}
