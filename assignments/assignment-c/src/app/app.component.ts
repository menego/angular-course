import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  toggleDisplayP = true;
  clickNumber = 0;
  clickLogs = [];

  constructor() {

  }

  switchPDisplay() {
    this.toggleDisplayP = !this.toggleDisplayP;
    this.clickLogs.push(new Date());
  }

}
