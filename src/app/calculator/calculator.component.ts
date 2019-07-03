import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import userInfo from '../user-info';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  
  userDetails: userInfo = {
    monthly: null,
    expenses: null,
    hours: null,
    price: null,
    timeSpent: null
  }

  @Output() userInfo: EventEmitter<userInfo> = new EventEmitter<userInfo>();

  constructor() { }

  ngOnInit() {
  }
  calculate() {
    const {monthly, expenses, hours, price} = this.userDetails;
    const timeSpent = (price / (((monthly * 12) - expenses) / (hours * 52)));
    this.userDetails.timeSpent = timeSpent;
    this.userInfo.emit(Object.assign({}, this.userDetails));
  }

}
