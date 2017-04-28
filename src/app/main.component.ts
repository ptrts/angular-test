import {Component} from '@angular/core';

@Component({
  selector: 'our-main',
  template: `
    <span>router-outlet:</span>
    <router-outlet></router-outlet>
  `
})
export class MainComponent {
}
