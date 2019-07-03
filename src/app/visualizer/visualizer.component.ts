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
    timeSpent: null
  }
  constructor() { }

  ngOnChanges(changes){
    console.log(changes);
  }
  ngOnInit() {
    if(this.userInfo == null){
      this.userInfo = {
        monthly: null,
        expenses: null,
        hours: null,
        price: null,
        timeSpent: null
      }
    }
  }

}
