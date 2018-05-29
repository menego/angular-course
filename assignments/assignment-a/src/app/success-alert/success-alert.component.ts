import {Component} from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `
    <p class="success">
      Success!
    </p>`,
  styles: [`
    .success {
      color: greenyellow;
      font-weight: bolder;
    }`]
})
export class SuccessAlertComponent {
  constructor() {
  }
}
