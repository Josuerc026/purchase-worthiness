import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import userInfo from '../user-info';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  test:number = 30;
  userDetails: userInfo = {
    monthly: 4000,
    expenses: 500,
    hours: 40,
    price: 150,
    calcs: {
      timeSpent: null,
      percentageOfWeeklyTimeSpent: null,
      percentageOfMonthly: null,
      percentageOfExpenses: null,
      percentageOfSaved: null
    }
  }

  @Output() userInfo: EventEmitter<userInfo> = new EventEmitter<userInfo>();

  constructor() { }

  ngOnInit() {
  }
  calculate() {
    const {calcs} = this.userDetails;
    calcs.timeSpent = this.timeSpent(this.userDetails);
    calcs.percentageOfWeeklyTimeSpent = this.percentageOfWeeklyTimeSpent(this.userDetails);
    calcs.percentageOfMonthly = this.percentageOfMonthly(this.userDetails);
    calcs.percentageOfExpenses = this.percentageOfExpenses(this.userDetails);
    calcs.percentageOfSaved = this.percentageOfSaved(this.userDetails);
    console.log(this.userDetails);
    this.userInfo.emit(Object.assign({}, this.userDetails));
  }

  timeSpent({monthly, expenses, hours, price}){
    return (price / (((monthly * 12) - expenses) / (hours * 52)));
  }

  percentageOfWeeklyTimeSpent({monthly, expenses, hours, price}){
    return (Math.round(this.timeSpent({monthly, expenses, hours, price})) / hours) * 100;
  }

  percentageOfMonthly({monthly, expenses, hours, price}){
    return (price / (monthly - expenses)) * 100;
  }

  percentageOfExpenses({monthly, expenses, hours, price}){
    return (price / expenses) * 100;
  }

  percentageOfSaved({monthly, expenses, hours, price}){
    return (price / ((monthly - expenses) * 0.2)) * 100;
  }

}
