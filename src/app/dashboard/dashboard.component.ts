import { Component, OnInit } from '@angular/core';
import userInfo from '../user-info';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userInfo: userInfo = null;
  constructor() { }

  ngOnInit() {
  }
  storeUserInfo(user: userInfo): void{
    this.userInfo = user;
  }
}
