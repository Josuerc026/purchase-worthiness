import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.scss']
})
export class VisualizerComponent implements OnInit {
  @Input('timeSpent') timeSpent: number = null;
  @Input('hours') weeklyHours: number = null;
  constructor() { }

  ngOnInit() {
  }

}
